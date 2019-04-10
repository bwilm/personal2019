//Install express server
const express = require('express');
const http = require('http');
const path = require('path');


const app = express();

const port = process.env.PORT || 3001;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-app'));

app.get('/*',(req,res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port,() => console.log('Running...'));
