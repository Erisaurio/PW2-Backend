require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnect = require('./config/mongo')
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.static("Posters_storage"))
app.use(express.static("Profile_storage"))
app.use(express.static("cast_storage"))

const port = process.env.PROT || 3001

/**
 * Aqui estan las rutas
 */
 app.use("/api",require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
}
)

dbConnect()