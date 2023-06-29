const express = require("express");
const router = express.Router();
const contactrController = require("./controllers/contactController");
const cors = require("cors");

// Define your API routes
router.post("/send-email", cors(), contactrController.sendMail);

// Export the router
module.exports = router;
