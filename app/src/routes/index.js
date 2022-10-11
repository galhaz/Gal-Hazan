const express = require("express")

const apiRoutes = require("./api.router");
const appRoutes = require("./app.router");

const router = express.Router()

router.use(apiRoutes);
router.use(appRoutes);

module.exports= router;

