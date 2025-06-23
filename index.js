const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hello11";
  let world = hello + " world2e82";
  console.log(world);
  
  res.send('Hello World 999');
});

app.listen(3003);
