const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const routeWords = require('./src/routes/words');

app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/words', cors(), routeWords, (req, res) => res.sendStatus(401));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Retsina is listening on ${port}`);
