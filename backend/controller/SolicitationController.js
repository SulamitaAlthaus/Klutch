const SolicitationModel = require('../model/client')

class SolicitationController {

    async create(req, res) {
        const solicitation = new SolicitationModel();
        await solicitation.save()
         .then(response => {
          return res.status(200).json(response);
         })
         .catch(error => {
          return res.status(500).json(error);
         });
       }

    async show(req, res) {
     await SolicitationModel.find({})
      .then(response => {
       return res.status(200).json(response);
      })
      .catch(error => {
       return res.status(500).json(error);
      });
    }

}

module.exports = new SolicitationController();