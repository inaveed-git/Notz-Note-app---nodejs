const express = require("express");
const router = express.Router();
const MainController = require("../controllers/main.js");
const wrapAsync = require("../../utils/wrapAysnc.js");

router.get("/", wrapAsync(MainController.homepage));
router.get("/about", wrapAsync(MainController.about));

module.exports = router;
