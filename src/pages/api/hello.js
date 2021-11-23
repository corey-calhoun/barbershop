// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'Perfect Gentleman Barbershop',
    description: 'Barbershop',
    contact: {
      phone: '+1-555-555-5555',
      email: '',
      url: 'https://perfectgentleman.com',
    },
    location: {
      address: '116 Themis',
      city: 'Cape Girardeau',
      state: 'MO',
      zip: '63701',
    },
    hours: {
      monday: 'closed',
      tuesday: '9:00am - 5:00pm',
      wednesday: '9:00am - 5:00pm',
      thursday: '9:00am - 5:00pm',
      friday: '9:00am - 5:00pm',
      saturday: '9:00am - 5:00pm',
      sunday: 'closed',
    },
    services: [
      {
        name: 'Cut',
        description: 'Cut your hair',
        price: '$25',
      },
      {
        name: 'Shave',
        description: 'Shave your hair',
        price: '$25',
      },
    ],
  });
}


