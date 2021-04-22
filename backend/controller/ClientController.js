const ClientModel = require('../model/client')

class ClientController {

    async create(req, res) {
        const client = new ClientModel();
        await client.save()
         .then(response => {
          return res.status(200).json(response);
         })
         .catch(error => {
          return res.status(500).json(error);
         });
       }

       async show(req, res) {
        await ClientModel.findOne({ 'cpf': { '$in': req.params.cpf } } )
         .then(response => {
          return res.status(200).json(response);
         })
         .catch(error => {
          return res.status(500).json(error);
         });
       }

}

module.exports = new ClientController();