const getAllTravellers = (req, res) => {
  res.send('getAllTravellers');
};
const createTraveller = (req, res) => {
  res.send('createTraveller');
};
const getTravellerById = (req, res) => {
  res.send('getTravellerById');
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
