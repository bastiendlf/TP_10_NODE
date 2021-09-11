const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT || "3000", () => {
    console.log("Le serveur est à l’écoute sur le port 3000");
  });