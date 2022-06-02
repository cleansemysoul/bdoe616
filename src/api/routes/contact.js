const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact_controller");

router.get("/", contactController.getContacts);

router.get("/:id", contactController.getContact);

router.post("/", contactController.addContact);

router.patch("/", contactController.editContact);

router.delete("/", contactController.deleteContact);

module.exports = router;
