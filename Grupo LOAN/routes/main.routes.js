const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getInicio);
router.get('/servicios', mainController.getServicios);
router.get('/contacto', mainController.getCotizacion);

module.exports = router;