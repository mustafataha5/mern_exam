const Pirate= require('../models/pirate.model')



//create 
module.exports.pirateCreate = (req,res) =>{
    Pirate.create(req.body)
        .then(pirate => {
            res.json({pirate:pirate})})
        .catch(err => res.status(400).json(err)); 
}

//get 
module.exports.pirateFindAll = (req,res) =>{
    Pirate.find({})
    .then(pirates => res.json({pirates:pirates}))
    .catch(err => res.json(err)) ; 
}

module.exports.pirateFindOne = (req,res) =>{
    Pirate.findById({_id:req.params.id})
    .then(pirate => res.json({pirate:pirate}))
    .catch(err => res.json(err)) ; 
}

//update 
module.exports.pirateUpdate = (req,res) =>{
    Pirate.findByIdAndUpdate({_id:req.params.id}
        ,req.body 
        ,{new:true,runValidators:true}
    )
    .then(pirate => res.json({pirate:pirate}))
    .catch(err => res.status(400).json(err)); 
}

//delete 
module.exports.pirateDelete = (req,res) =>{
    Pirate.findByIdAndDelete({_id:req.params.id})
    .then(pirate => res.json({pirate:pirate}))
    .catch(err => res.json(err)) ; 
}







