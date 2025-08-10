const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    }
})
module.exports = movieSchema