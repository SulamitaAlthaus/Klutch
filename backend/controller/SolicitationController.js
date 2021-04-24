const SolicitationModel = require('../model/solicitation')

class SolicitationController {

    async create(req, res) {
        const solicitation = new SolicitationModel(req.body);
        await solicitation.save()
         .then(response => {
          return res.status(200).json(response);
         })
         .catch(error => {
          return res.status(500).json(error);
         });
       }

    async show(req, res) {
     await SolicitationModel.findOne({ 'clientId': { '$in': req.params.clientId } } )
      .then(response => {
       return res.status(200).json(response);
      })
      .catch(error => {
       return res.status(500).json(error);
      });
    }

}

module.exports = new SolicitationController();