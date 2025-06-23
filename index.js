const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hello1s1";
  let world = "world2e82s";
  console.log(hello, world);
  
  res.send('Hello World 999');
});

app.listen(3003);
