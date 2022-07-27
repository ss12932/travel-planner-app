const { Router } = require('express');

const {
  getLocations,
  createLocation,
  getLocationById,
  deleteLocationById,
} = require('../../controllers/api/locations');

const router = Router();

router.get('/', getlocations);
router.post('/', createlocation);
router.get('/:id', getLocationById);
router.delete('/:id', deleteLocationById);

module.exports = router;
