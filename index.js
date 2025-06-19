const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hello";
  console.log(hello);
  
  res.send('Hello World 99--9');
});

app.listen(3003);
