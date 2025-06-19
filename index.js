const express = require('express');
const app = express();

app.get('/about', function (req, res) {
  let hello = "hello";
  console.log(hello);
  
  res.send('Hello Worlvdsvsvd 999');
});

app.listen(3003);
