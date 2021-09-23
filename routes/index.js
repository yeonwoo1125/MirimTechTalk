const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');

const router = express.Router();
const mainPage = fs.readFileSync('./views/main.ejs', 'utf8');
//POST / 라우터

const table = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'yeanwoo0619',
    database : 'mirimtechtalk'
});

router.get('/',function(req, res){
    table.query("SELECT * FROM users",(err, result, fields)=>{
        usersRes = JSON.parse(JSON.stringify(result));

        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else {
            var page = ejs.render(mainPage, {
                title: "Title",
                data: result,
            });
            res.send(page);
        }
    });
});
module.exports = router;