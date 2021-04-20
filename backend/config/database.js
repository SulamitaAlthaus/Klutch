const mongoose = require('mongoose');
const url = 'mongodb+srv://root:qweasd@cluster0.rsisd.mongodb.net/klutch?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Conectado ao bd")
})
.catch((err) => {
    console.log("Não foi possível conectar ao banco de dados")
});

module.exports = mongoose;
