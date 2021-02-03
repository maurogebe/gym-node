const express = require("express")
const morgan = require("morgan");
require("dotenv").config();

// Import Routes
const clientsRouter = require("./routes/clients");
const membershipsRouter = require("./routes/memberships")

const app = express()

const PORT = process.env.PORT;

app.use(express.json())
app.use(morgan("dev"));

// Obteniendo Clientes y anadiendo clientes
app.use(clientsRouter)

// Obteniendo todas las Membresias y obteniendo una membresia por ID 
app.use(membershipsRouter)

// Iniciando servidor
app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});