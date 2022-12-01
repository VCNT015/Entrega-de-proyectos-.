const express = require('express')
const app = express()
const port = 80;
// este ejemplo es para cuando la carpeta esta dentro de otra
//app.use(express.static('public/assets'));
app.use(express.static('assets'));

 app.get('/', function (req, res) {
   res.sendFile(__dirname + "/vista/index.html");
 });
app.get('/cv', function (req, res) {
    res.sendFile(__dirname + "/vista/cv.html");
});
app.get('/flex', function (req, res) {
  res.sendFile(__dirname + "/vista/flex.html");
});
app.get('/formulario', function (req, res) {
  res.sendFile(__dirname + "/vista/formulario.html");
});
app.get('/HTML', function (req, res) {
  res.sendFile(__dirname + "/vista/HTML.html");
});


app.listen(port)
console.log(`Servidor web corriendo: http://localhost:${port}`)