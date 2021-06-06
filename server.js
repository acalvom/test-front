//Install express server
const PATH_PROJECT = '/dist/test-front';

const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + PATH_PROJECT));

// app.get('/*', (req, res) =>
//   res.sendFile('index.html', {root: 'dist/test-front/'}),
// );

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));


app.listen(process.env.PORT || 8080, () => {
  if (!process.env.PORT) {
    console.log('Running with Express... http://localhost:8080/');
  }
});
