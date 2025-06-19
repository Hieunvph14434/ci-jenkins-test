const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hellow";
  console.log(hello);
  
  res.send('Hello World 999');
});

app.listen(3003);
