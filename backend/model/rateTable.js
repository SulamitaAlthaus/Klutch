const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RateTableSchema = new Schema({
    id: { type: Number, default: 1 },
    name: { type: String, default: "tabela 1" },
    installments: { type: Array, default: [] },
});

module.exports = mongoose.model('RateTable', RateTableSchema);