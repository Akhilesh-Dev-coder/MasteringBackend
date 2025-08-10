const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Akhileshtiss8:Magician10@cluster0.ju95f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log("Connected to DataBase"))

app.use(express.json())
app.use(express.urlencoded())

const Router = require("./routes/movies")
app.use("/film",Router)

app.listen(PORT,() => console.log(`Server is running on port ${PORT}`))