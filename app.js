const express = require('express');
const app = express();
const path = require('path')

app.use('/static', express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor corriendo');
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/home.html")
});

app.get("/crear-cuenta", (req,res) => {
    res.sendFile(__dirname + "/views/crear-cuenta.html")
});

app.get("/login", (req,res) => {
    res.sendFile(__dirname + "/views/login.html")
});