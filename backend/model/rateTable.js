const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RateTableSchema = new Schema({
    name: { type: String, default: "tabela 1" },
    installments: { type: Array, default: [] },
});

module.exports = mongoose.model('RateTable', RateTableSchema);