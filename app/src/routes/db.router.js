const express = require("express");
const dbController = require("../db/CreateDB");

const router = express.Router();
router.get("/createDB/babysitters", dbController.CreateTableBabysitters);
router.get("/createDB/parents", dbController.CreateTableParents);
router.get("/createDB/insert-parents", dbController.InsertDataIntoParents);
router.get(
  "/createDB/insert-babysitters",
  dbController.InsertDataIntoBabysitters
);
router.get("/select/babysitters", dbController.ShowTableBabysitters);
router.get("/select/parents", dbController.ShowTableParents);
router.get("/drop/parents", dbController.DropTableParents);
router.get("/drop/babysitter", dbController.DropTableBabysitters);

module.exports = router;
