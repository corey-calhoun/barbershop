/* eslint-disable import/no-anonymous-default-export */
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);


export default async (req, res) => {
    const { items, email } = req.body;

    // for testing
    console.log(items);
    console.log(email);


    // implicit return item props
    const transformedItems = items.map(item => ({
        description: item.description,
        quantity: 1,
        price_data: {
            currency: 'usd',
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            },
        },
    }));

    // create stripe session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['US']
        },
        shipping_rates: ['shr_1JGL3MAbL41zoo5U3ri2MLVF'],
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/orderComplete`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    });


    res.status(200).json({ id: session.id });
};