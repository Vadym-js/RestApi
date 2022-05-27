const Dismissal = require('../model/index-model');

class DismissalController{
    async getDis(req, res) {
        try{
            const dismissals = await Dismissal.find({});
            res.render('pages/about', {
                title: 'Main page',
                dismissals
            })
        } catch (e) {
            console.log(`Error: ${e}`)
            res.json(e)
        }
    }
};
module.exports = new DismissalController();