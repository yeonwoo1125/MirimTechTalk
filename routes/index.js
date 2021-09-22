const express = require('express');


const router = express.Router();

//POST / 라우터

router.get('/',function(req, res){
    res.send('post page')
});

module.exports = router;