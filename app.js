const res = require("express/lib/response");

const express = require("express");
const app = express();
const port = 3000; // localhost:3000

//localhost:3000
app.get("/", (request, response) => {
  response.send("Hola a todos los explorers");
});

//localhost:3000/launchx
app.get("/launchx", (request, response) => {
  response.send("Bienvenidos a launchX");
});

app.listen(port, () => {
  console.log("Servidor listo");
});
