const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("dist"));

app.get('/', function(req, res)  {
    //setting middleware
res.sendFile(path.join('dist/index.html'));
});

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
server.listen(PORT);
console.debug('Matt...your server is listening on port ' + PORT);
