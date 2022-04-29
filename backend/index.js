const express = require('express');
const app = express();
var mysql = require('mysql');
const cors= require('cors')
const port = 3006;

app.use(cors())

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: '',
    database: 'tms'
  })

connection.connect(function(err){
    if(!err)
    console.log("database connected");
    else
    console.log("database not connected");
  })

app.get('/',(req,res)=>{
    res.send("hello");
 })

app.get('/movies', (req, res) => {
  connection.query('SELECT * FROM movie',(err,rows,fields)=>{
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try{
        console.log(rows)
        res.json({rows})
        
    }catch (err) {
        console.log('error parsing JSON',err)
    }
    });
});

 
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })