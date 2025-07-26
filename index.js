require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('my first server!');
});

app.get('/login', (req, res) => {
  res.send('<h1> please log in! </h1>');
});

app.listen(process.env.PORT, () => {
  console.log('listening to port');
});
