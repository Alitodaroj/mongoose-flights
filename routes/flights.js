var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.newFlight);

router.get("/:id", flightsCtrl.show);

router.post("/", flightsCtrl.create);

router.post("/", flightsCtrl.addTicket);

router.post('/:id/destinations', flightsCtrl.addDestination);

module.exports = router;
