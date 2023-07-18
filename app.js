const express=require('express');
const app=express();
const path = require('path');
const router = express.Router();
const port=3000;

//home page 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

//listen to the server
app.listen(port, ()=>{
    console.log(` The server has started at ${port}`);
});