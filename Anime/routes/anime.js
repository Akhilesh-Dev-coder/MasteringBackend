const express = require("express")
const router = express.Router()
const Anime = require("../models/anime")

// Viewing data
router.get("/",async (req,res) => {
    try{
        const anime = await Anime.find()
        res.status(200).json({status:true,anime})
    }catch(err){
        res.status(500).json({status:false,err})
    }   
})
router.get('/:id',async (req,res) => {
    try{
        const anime = await Anime.findById(req.params.id)
        res.status(200).json({Status:true,anime})
    }catch(err){
        res.status(500).json({status:false,message:"this anime is not available",err})
    }
})
// Adding data
router.post("/",async (req,res) => {
    const anime = new Anime({
            title:req.body.title,
            description:req.body.description,
            genre:req.body.genre,
            status:req.body.status
    })
    try{
        const animeStatus = await anime.save()
        res.status(200).json({status:true,animeStatus})
    }catch(err){
        res.status(500).json({status:false,err})
    }
})
// Updating data
router.patch("/:id",async (req,res) => {
    try{
        const anime = await Anime.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({status:true,anime})
    }catch(err){
        res.status(500).json({status:false,err})
    }
})
// Deleting data
router.delete("/:id",async (req,res) => {
    try{
        const anime = await Anime.findByIdAndDelete(req.params.id)
        res.status(200).json({status:true,message:"Deleted Anime"})
    }catch(err){
        res.status(500).json({status:false,message:"Error occured during the Deletion",err})
    }
})

// async function getAnime(req,res,next){
//     let animes
//     try{
//         animes = await Anime.findById(req.params.id)
//         if(animes == null){
//             res.status(404).json({status:false,message:"Cannot find that Anime"})
//         }
//     }catch(err){
//         res.status(500).json({status:false,err})
//     }
//     res.animes = animes
//     next()
// }

module.exports = router