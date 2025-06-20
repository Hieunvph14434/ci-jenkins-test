const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hello1dasd1";
  let world = "world2e82";
  console.log(hello);
  
  res.send('Hello World 999');
});

app.listen(3003);