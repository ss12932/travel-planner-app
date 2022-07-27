const getLocations = (req, res) => {
  res.send('getLocations');
};
const createLocation = (req, res) => {
  res.send('createLocation');
};
const getLocationById = (req, res) => {
  res.send('getLocationById');
};
const deleteLocationById = (req, res) => {
  res.send('deleteLocationById');
};

module.exports = {
  getLocations,
  createLocation,
  getLocationById,
  deleteLocationById,
};
