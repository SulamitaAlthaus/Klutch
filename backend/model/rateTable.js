const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const RateTableSchema = new Schema({
    name: { type: String, default: "tabela 1" },
    installments: [
        {
            id: { type: Number, default: 1 },
            installments: { type: Number, default: 1 },
            installmentInterest: { type: Number, default: 15 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 2 },
            installments: { type: Number, default: 2 },
            installmentInterest: { type: Number, default: 20 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 3 },
            installments: { type: Number, default: 3 },
            installmentInterest: { type: Number, default: 25 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 4 },
            installments: { type: Number, default: 4 },
            installmentInterest: { type: Number, default: 30 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 5 },
            installments: { type: Number, default: 5 },
            installmentInterest: { type: Number, default: 15 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 6 },
            installments: { type: Number, default: 6 },
            installmentInterest: { type: Number, default: 20 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 7 },
            installments: { type: Number, default: 7 },
            installmentInterest: { type: Number, default: 25 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 8 },
            installments: { type: Number, default: 8 },
            installmentInterest: { type: Number, default: 30 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 9 },
            installments: { type: Number, default: 9 },
            installmentInterest: { type: Number, default: 15 },
            comission: { type: Number, default: 5 },
        },
        {
            id: { type: Number, default: 10 },
            installments: { type: Number, default: 10 },
            installmentInterest: { type: Number, default: 20 },
            comission: { type: Number, default: 5 },
        }
    ]
});

module.exports = mongoose.model('rateTable', RateTableSchema);