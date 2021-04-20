const express = require('express');
const router = express.Router();

const TableController = require('../controller/TableController')
const ClientController = require('../controller/ClientController')
const SolicitationController = require('../controller/SolicitationController')

router.post('/', TableController.create);
router.get('/show', TableController.show);


router.post('/newuser', ClientController.create);
router.get('/showuser', ClientController.show);


router.post('/newsolicitation', SolicitationController.create);
router.get('/showsolicitation', SolicitationController.show);

module.exports = router;