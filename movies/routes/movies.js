const express = require("express")
const router = express.Router()
const Movies = require("../models/movies")

// Displaying Movies
router.get("/",async(req,res) => {
    try{
        const movie = await Movies.find()
        res.status(200).json({Status:true,movie})
    }catch(err){
        res.status(500).json({Status:false,message:"Nothing to be Found"})
    }
})
// Displaying Movies by ID
router.get("/:id",async (req,res) => {
    try{
        const movie = await Movies.findById(req.params.id)
        res.status(200).json({status:true,movie})
    }catch(err){
        res.status(400).json({status:false,message:"Not Found"})
    }
})
// Creating Movies
router.post("/",async (req,res) => {
    const movies = new Movies({
        title:req.body.title,
        genre:req.body.genre,
        language:req.body.language
    })
    try{
        const movie = await movies.save()
        res.status(200).json({status:true,movie})
    }catch(err){
        res.status(500).json({status:false,message:"Adding new movie failed"})
    }
})


module.exports = router