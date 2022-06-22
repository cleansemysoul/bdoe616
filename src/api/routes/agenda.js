const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agenda_controller");

router.get("/:id", agendaController.getAgenda);

router.post("/", agendaController.addEvent);

module.exports = router;
