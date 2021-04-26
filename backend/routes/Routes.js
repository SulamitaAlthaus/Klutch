const express = require('express');
const router = express.Router();

const TableController = require('../controller/TableController')
const ClientController = require('../controller/ClientController')
const SolicitationController = require('../controller/SolicitationController')

router.post('/', TableController.create);
router.get('/show', TableController.show);
router.get('/show/:id', TableController.showOne);


router.post('/newuser', ClientController.create);
router.get('/showuser/:cpf', ClientController.show);


router.post('/newsolicitation', SolicitationController.create);
router.get('/showsolicitation/:clientId', SolicitationController.show);

module.exports = router;