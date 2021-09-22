const express = require('express');
const fs = require('fs');
const ejs = require('ejs');

const router = express.Router();
const mainPage = fs.readFileSync('./views/main.ejs', 'utf8');
//POST / 라우터

router.get('/',function(req, res){
    var page = ejs.render(mainPage, {
        title: "Title",
        
    });
    res.send(page);
        
});


module.exports = router;