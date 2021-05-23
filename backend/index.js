const express = require('express')
const app = express()
const port = 3451
const mysql = require('mysql2');

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/test', (req, res) => {
  res.send('Hello World Test!')
})

app.get('/api/db', (req, res) => {
  const con = mysql.createConnection({
    host: "mysqldb",
    user: "root",
    port: '3306',
    password: "",
    database: 'docker_example_db'
  });
 
  let result = {};
  con.connect(function(err) {
    if (err) result = JSON.stringify(err);
    else result = 'Connected';
    res.send(result)
  });
  

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
