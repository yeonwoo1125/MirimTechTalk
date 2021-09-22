const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const ejs = require('ejs');
const mainPage = fs.readFileSync('./views/index.ejs', 'utf8');

const router = express.Router();


const table = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'yeanwoo0619',
    database : 'mirimtechtalk'
});

//POST /boards 라우터
router.get('/',(req, res)=>{
    table.query("SELECT * FROM users",(err, result, fields)=>{
        //usersRes = JSON.parse(JSON.stringify(result));

        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else {
            var page = ejs.render(mainPage, {
                title: "Temporary Title",
                data: result,
            });
            res.send(page);
        }
    });
});

module.exports = router;