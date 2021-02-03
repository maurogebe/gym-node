const express = require("express")
const morgan = require("morgan");
require("dotenv").config();

// Import Routes
const clientsRouter = require("./routes/clients");
// const tarjetaRouter = require("./routes/tarjetas");

const app = express()

const PORT = process.env.PORT;

app.use(express.json())
app.use(morgan("dev"));

// Get add Clients
app.use(clientsRouter)

// Iniciando servidor
app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});