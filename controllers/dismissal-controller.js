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
    async deleteDis(req, res) {
        const id = req.body.id; //
        await Dismissal.deleteOne({id}, () => {
            console.log(`Dismissal with id ${id} deleted !`);
            res.status(200).redirect('/about');
        }).clone().catch((e) => {
            console.log(`Error: ${e}!`);
            res.status(500).json(e);
        });
    }

    async updateDis(req, res){
        try{
            const id = req.body.id;
            await Dismissal.updateOne({id}, req.body)
            res.redirect('/about');
        } catch (e){
            console.log(`Error: ${e}!`);
            res.status(500).json(e);
        };
    };

};

module.exports = new DismissalController();