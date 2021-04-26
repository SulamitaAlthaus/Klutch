const express = require('express');
const cors = require('cors');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(cors());
server.use(express.json());
const TableRoutes = require('./routes/Routes.js');
server.use('/', TableRoutes);


PORT = process.env.PORT || 8081
server.listen(PORT, () => {
    console.log("Servidor rodando")
})