const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/test-front'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/test-front/index.html'));});

app.get('*', function (req, res) {
  const index = path.join(__dirname, '/dist/test-front', 'index.html');
  res.sendFile(index);
});
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, PATH_PROJECT, index.html)));


app.listen(process.env.PORT || 8080);
