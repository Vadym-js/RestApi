const express = require('express');
const router = express.Router();
const Post = require('../model/index-model')
const dismissalController = require('../controllers/dismissal-controller')

router.get('/index',(req,res)=>{
    res.render('pages/index');
})
router.get('/about', dismissalController.getDis);
router.post('/about',dismissalController.deleteDis);

router.get('/create',(req,res)=>{
    res.render('pages/create');
})
router.get('/update',(req,res)=>{
    res.render('pages/update');
})
router.get('/delete',(req,res)=>{
    res.render('pages/delete');
})
router.get('/', (req, res)=> {
    res.render('pages/index');
});

router.post('/create',async (req,res)=>{
    const user = new Post({
        id: req.body.id,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        group:req.body.group,
        dismissal:req.body.dismissal
    });
    try {
        const savedPost = await user.save();
        res.redirect('/about');
    }catch (err){
        res.json({massage:err});
    }
})
router.get('/create', async (req, res) => {
    try{
        const data = await Post.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
module.exports = router;