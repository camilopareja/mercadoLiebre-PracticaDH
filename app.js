const express = require('express');
const app = express();
const path = require('path')

app.use('/static', express.static(__dirname + '/public'));

app.listen(3030, console.log('Servidor corriendo'));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/views/home.HTML"))
});