const mongoose = require('mongoose')


const PirateSchema = mongoose.Schema({
    name:{
        type: String , 
        required:[true,"Pirate name is required ."], 
        minlength:[5,"Pirate name must be at least 5 charcters ."],
        maxlenght:[30,"Pirate name must be at max 30 charcters ."]
    },
    imgurl:{
        type: String , 
        required:[true,"Pirate Image Url is required ."], 
        minlength:[15,"Pirate Image Url be at least 15 charcters ."]
    },
    numOfTreasure:{
        type: Number , 
        required:[true,"Pirate Number Of Treasure is required ."], 
        default: 0 
    },
    catchphrase:{
        type: String , 
        required:[true,"Pirate catchphrase is required ."], 
        minlength:[5,"Pirate catchphrase must be at least 5 charcters ."]
    },
    postion:{
        type: Number , 
        required:[true,"Pirate Position is required ."], 
        default: 0,//0 sailor /1 first mate /2 caption
    },
    status: {
        type: [Boolean],
        default:[false,false,false],
    },
},{
    timetamps:true , 
}
)

const Pirate = mongoose.model('Pirate',PirateSchema) ; 
module.exports=Pirate ; 
