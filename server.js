const express = require("express")
const morgan = require("morgan");
require("dotenv").config();

// Import Routes
const clientsRouter = require("./routes/clients");
const membershipsRouter = require("./routes/memberships")
const paymentsRouter = require("./routes/payments")

const app = express()

const PORT = process.env.PORT;

app.use(express.json())
app.use(morgan("dev"));

// Obteniendo todos los Clientes, obteniendo cliente por ID y creando clientes
app.use(clientsRouter)

// Obteniendo todas las Membresias, obteniendo una membresia por ID y creando una membresia
app.use(membershipsRouter)

// Obteniendo todas los pagos, obteniendo pago por ID de cliente y realizando pago
app.use(paymentsRouter)

// Iniciando servidor
app.listen(PORT, () => {
    console.log("Corriendo el servidor sobre el puerto", PORT);
});