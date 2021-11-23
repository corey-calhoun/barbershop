module.exports = {
  mode: 'universal',
  images: {
    domains: ['fakestoreapi.com', "placeimg.com", "images.pexels.com"],
  },
  environment: {
    stripe_public_key: process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
  },
};