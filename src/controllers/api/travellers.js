const { getPayloadWithValidFieldsOnly } = require('../../helpers');
const { Traveller, Trip, Location } = require('../../models');

const getAllTravellers = async (req, res) => {
  try {
    const travellers = await Traveller.findAll({});
    return res.json({ data: travellers });
  } catch (err) {
    console.log(`[ERROR]: Failed to get all travellers | ${error.message}`);
    return res.status(500).json({ error: 'Failed to get all travellers' });
  }
};
const createTraveller = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(['name', 'email'], req.body);
    console.log(req.body);
    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({ error: 'Bad Request' });
    }
    const traveller = await Traveller.create(payload);

    return res.json({
      data: traveller,
      message: 'Successfully created a traveller',
    });
  } catch (err) {
    console.log(`[ERROR]: Failed to create a traveller | ${err.message}`);
    return res.status(500).json({ error: 'Failed to create a traveller' });
  }
};
const getTravellerById = async (req, res) => {
  try {
    const { id } = req.params;
    const traveller = await Traveller.findByPk(id, {
      include: [
        {
          model: Location,
          through: Trip,
        },
      ],
    });

    if (!Traveller) {
      return res.status(404).json({ error: 'Traveller not found' });
    }

    return res.json({ data: traveller });
  } catch (err) {
    console.log(`[ERROR]: Failed to get a traveller | ${err.message}`);
    return res.status(500).json({ error: 'Failed to get a traveller' });
  }
};
const deleteTravellerById = (req, res) => {
  res.send('deleteTravellerById');
};

module.exports = {
  getAllTravellers,
  createTraveller,
  getTravellerById,
  deleteTravellerById,
};
