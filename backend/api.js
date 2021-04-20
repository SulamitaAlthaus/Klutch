const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());
server.use(express.json());
const TableRoutes = require('./routes/Routes.js');
server.use('/', TableRoutes);

server.listen(3333, () => {
 console.log('API ONLINE');
})