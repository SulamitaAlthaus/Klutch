const TableModel = require('../model/rateTable')

class TableController {

    async create(req, res) {
        const table = new TableModel(req.body);
        await table.save()
         .then(response => {
          return res.status(200).json(response);
         })
         .catch(error => {
          return res.status(500).json(error);
         });
       }

    async show(req, res) {
     await TableModel.find({})
      .then(response => {
       return res.status(200).json(response);
      })
      .catch(error => {
       return res.status(500).json(error);
      });
    }

    
    async showOne(req, res) {
      await TableModel.findOne({ 'id' : { '$in': req.params.id } })
       .then(response => {
        return res.status(200).json(response);
       })
       .catch(error => {
        return res.status(500).json(error);
       });
     }

}

module.exports = new TableController();