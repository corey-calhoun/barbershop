import { useSession } from 'next-auth/client'
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function checkout() {
  const [session] = useSession();

  const handleCheckout = async (event) => {
   
  }

  return (
    <div>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  )
}

export default checkout
