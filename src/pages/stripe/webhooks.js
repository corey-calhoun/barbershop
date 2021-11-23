/* eslint-disable import/no-anonymous-default-export */
import { buffer } from 'micro';
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

// secure a connection to FIREBASE from backend
// permission.json( Firebase Console =>Service Accounts =>Create New Private Key)
const serviceAccount = require('../../../firebase-permissions.json');
const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();


// establish connection to STRIPE
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY); //need to hide in env file

const endpointSecret = process.env.NEXT_PUBLIC_STRIPE_SIGNING_SECRET; //need to hide in env file

const fulfillOrder = async (session) => {

    //test if working
    console.log('Fulfilling order', session)

    return app
        .firestore()
        .collection('users')
        .doc(session.metadata.email)
        .collection('orders')
        .doc(session.id)
        .set({
            amount: session.amount_total / 100,
            amount_shipping: session.total_details.amount_shipping / 100,
            images: JSON.parse(session.metadata.images),
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
            console.log(`SUCCESS: Order ${session.id} has been added to the DB`)
        });
};

export default async (req, res) => {
    if (req.method === 'POST') {
        const requestBuffer = await buffer(req);
        const payload = requestBuffer.toString();
        const sig = req.headers['stripe-signature'];

        let event;

        //verify the event posted came from STRIPE
        try {
            event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        } catch (err) {
            console.log('ERROR', err.message)
            return res.status(400).send(`Webhook error: ${err.message}`)
        }

        // handle the checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;

            //fulfull the order
            return fulfillOrder(session)
                .then(() => res.status(200))
                .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
        }
    }
};

export const config = {
    api: {
        bodyParser: false, //we want req as string instead of passed object
        externalResolver: true //when we get an event, STRIPE handles it
    }
}