const express = require('express');
const mysql = require('mysql');

const fs = require('fs');
const ejs = require('ejs');
const router = express.Router();
const mainPage = fs.readFileSync('./views/index.ejs', 'utf8');


const table = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'yeanwoo0619',
    database : 'mirimtechtalk'
});

//POST /boards 라우터
router.get('/',function(req, res){
    table.query("SELECT * FROM users",(err, result, fields)=>{
        //usersRes = JSON.parse(JSON.stringify(result));

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

router.post('/',(req, res)=>{ //데이터 추가하는 페이지 불러옴
    var id=req.body.id;
    var title=req.body.title;
    var description=req.body.description;
    var params=[id, title,description]
    var sql="INSERT INTO users(id, title, description) values(?,?,?)";
    table.query(sql, params,(err, result, fields)=>{
        if(err){
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else {

            res.send("data inserted");  
            
        }
    })
})

module.exports = router;