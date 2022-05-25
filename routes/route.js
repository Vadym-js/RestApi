const express = require('express');

const router = express.Router();

router.get('/index',(req,res)=>{
    res.render('pages/index');
})
router.get('/about',(req,res)=>{
    res.render('pages/about');
})
router.get('/create',(req,res)=>{
    res.render('pages/create');
})
router.get('/update',(req,res)=>{
    res.render('pages/update')
})
router.get('/delete',(req,res)=>{
    res.render('pages/delete')
})
router.get('/', (req, res)=> {
    res.render('pages/index');
});
module.exports = router;