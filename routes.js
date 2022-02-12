var express = require('express');
var router = express.Router();
var Gadget = require('./Models/t5gadgets')

//to fetch gadgets
router.get('/gadgets',async(req,res)=>{
    const igadget = await Gadget.find()
    res.send(igadget)
})

//to add the gadgets
router.post("/gadgets",async(req,res)=>{
    const igadget = new Gadget({
        name:req.body.name,
        price:req.body.price
    })

    await igadget.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating gadget

router.patch('/gadgets/:id',async (req,res)=>{
    const igadget = await Gadget.findOne({_id:req.params.id})
    igadget.name = req.body.name
    igadget.price = req.body.price
    await igadget.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete("/gadgets/:name",async(req,res)=>{
    const gadget = await Gadget.deleteOne({name:req.params.name})
        if(igadget.deletedCount==1)
        {
            res.status(200).json({
                "Message":igadget
            })
        }
        else{
            res.status(500).json({
                "Error":igadget
            })
        }
})

module.exports = router 