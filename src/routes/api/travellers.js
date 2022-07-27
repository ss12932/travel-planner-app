const { Router } = require('express');

const {
  getAllTravellers,
  createTraveller,
  getTravellerById,
  deleteTravellerById,
} = require('../../controllers/api/travellers');

const router = Router();

router.get('/', getAllTravellers);
router.post('/', createTraveller);
router.get('/:id', getTravellerById);
router.delete('/:id', deleteTravellerById);

module.exports = router;
