const router = require('express').Router()
const controller = require('../controllers/chouses.js')

router.post('/create', controller.newHouse);
// router.post('/updateCreate', controller.updateCreate);


module.exports = router;
