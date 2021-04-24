const mongoose = require('../config/database');
const Schema = mongoose.Schema;


const SolicitationSchema = new Schema({
id: { type: Number },
clientId: { type: Number },
installmentInterest: { type: String },
installmentInterestValue: { type: String },
comission: { type: String },
comissionValue: { type: String },
installmentValue: { type: String },
cardNumber: { type: String },
desiredValue: { type: String },
totalLoan: { type: String },
installmentId: { type: Number },
rateTableId: { type: Number }
});

module.exports = mongoose.model('Solicitation', SolicitationSchema);