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

//localhost:3000/node
app.get("/node", (request, response) => {
  const explorer1 = { id: 1, name: "haim" };
  response.send(explorer1);
});

app.listen(port, () => {
  console.log("Servidor listo");
});
