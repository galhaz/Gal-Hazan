const express = require("express");

const apiRoutes = require("./api.router");
const appRoutes = require("./app.router");
const dbRouter = require("./db.router");

const router = express.Router();

router.use(apiRoutes);
router.use(appRoutes);
router.use(dbRouter);
module.exports = router;
