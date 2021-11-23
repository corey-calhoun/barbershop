import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // Actions
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload] //copy current store and add payload(product) to the array of items
        },
        removeFromBasket: (state, action) => {
            // search for item index, check against basket id to find id equal to what we're looking for and then remove the item (action.payload)
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

            let newBasket = [...state.items];

            if (index >= 0) {
                //the item esists... remove it
                newBasket.splice(index, 1);
            } else {
                //probably won't see this techinically because it wouldn't show product or page
                console.warn(`Cannot remove product (id: ${action.payload.id}) as it is not in the basket`)
            }
            //assign new global store value to the new basket
            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectSubtotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;