const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes');
const boardsRouter = require('./routes/boards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/',indexRouter);
app.use('/boards', boardsRouter);
app.use(express.json());

app.use((req, res) =>{
    res.status(404).send('Not Found');
});

app.listen(8080, ()=>{
    console.log('Server Running on Port 8080!');
});
