const express = require("express");
const apiController = require("../controllers/api.controller");

const router = express.Router();

router.post('/newParent', apiController.createNewParent);
router.post('/newBabysitter', apiController.createNewBabysitter);
router.post('/logIn', apiController.logIn);
router.post('/updateBabysitter', apiController.updateBabysitter);
router.post('/deleteBabysitter', apiController.deleteBabysitter);

router.get('/findNearLocation', apiController.findNearLocation);
router.get('/getBabysitters',apiController.getBabysitters);
router.get('/viewBabysitter/:email',apiController.getBabysitter);






module.exports= router;