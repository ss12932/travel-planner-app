const connection = require('../config/connection');
const { Traveller, Location, Trip } = require('../models');

const travellersData = require('./travellers.json');
const locationsData = require('./locations.json');

const seedDatabase = async () => {
  //everytime you seed, drop tables + recreate table, clearing out any data.
  await connection.sync({ force: true });

  console.log('DB sync successful');

  const travellers = await Traveller.bulkCreate(travellersData);

  console.log('Travellers seed successful');
  const locations = await Location.bulkCreate(locationsData);

  console.log('locations seed successful');
  // Create trips at random
  for (let i = 0; i < 10; i++) {
    // Get a random traveller's `id`
    const { id: randomTravellerId } =
      travellers[Math.floor(Math.random() * travellers.length)];

    // Get a random location's `id`
    const { id: randomLocationId } =
      locations[Math.floor(Math.random() * locations.length)];

    const newTrip = {
      trip_budget: (Math.random() * 10000 + 1000).toFixed(2),
      traveller_amount: Math.floor(Math.random() * 10) + 1,
      traveller_id: randomTravellerId,
      location_id: randomLocationId,
    };
    // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
    await Trip.create(newTrip).catch((err) => {
      // If there's an error, such as the same random pairing of `traveller.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  console.log('Trip seed sucessful');
  process.exit(0);
};

seedDatabase();
