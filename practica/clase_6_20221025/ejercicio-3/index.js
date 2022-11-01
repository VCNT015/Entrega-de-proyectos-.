const express = require('express')
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')));
//rutas
app.get('/hello-word', function (req, res) {
    res.send('Hello World')
}) 

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(80)
console.log("Servidor web corriendo: http://localhost")