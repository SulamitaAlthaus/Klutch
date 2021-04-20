const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const ClientSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    cpf: { type: String, required: true },
    bank: {
        label: { type: String, required: true },
        accountTypeLabel: { type: String, required: true },
        accountNumber: { type: Number, required: true }
    }

});

module.exports = mongoose.model('client', ClientSchema);