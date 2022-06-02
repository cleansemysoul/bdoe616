const express = require("express");
const router = express.Router();
const agendaController = require("../controllers/agenda_controller");

router.get("/", agendaController.getAgenda);
module.exports = router;
