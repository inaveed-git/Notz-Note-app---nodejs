const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware/checkAuth.js");
const dashboardController = require("../controllers/dashboardController");
const wrapAsync = require("../../utils/wrapAysnc.js");
const { noteSchemaValidation } = require("../middleware/schemaValidation.js");

router.get("/dashboard", isLoggedIn, wrapAsync(dashboardController.dashboard));
router.get("/dashboard/item/:id", isLoggedIn, wrapAsync(dashboardController.dashboardViewNote));
router.put("/dashboard/item/:id", isLoggedIn, noteSchemaValidation, wrapAsync(dashboardController.dashboardViewUpdate));
router.delete("/dashboard/item-delete/:id", isLoggedIn, wrapAsync(dashboardController.dashboardDeleteNote));
router.get("/dashboard/add", isLoggedIn, dashboardController.AddNewNote);
router.post("/dashboard/add", isLoggedIn, noteSchemaValidation, wrapAsync(dashboardController.AddNewNoteSubmit));
router.get('/dashboard/search', isLoggedIn, wrapAsync(dashboardController.dashboardSearch));
router.post('/dashboard/search', isLoggedIn, wrapAsync(dashboardController.dashboardSearchSubmit));

module.exports = router;
