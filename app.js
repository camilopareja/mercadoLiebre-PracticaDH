const express = require('express');
const app = express();
const path = require('path')

app.use('/static', express.static(__dirname + '/public'));

app.listen(3030, console.log('Servidor corriendo'));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.HTML")
});

app.get("/crear-cuenta", (req,res) => {
    res.sendFile(__dirname + "/views/crear-cuenta.html")
});

app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/views/login.html")
});