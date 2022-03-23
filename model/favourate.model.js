const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const favourateSchema = new mongoose.Schema({
    userId:Schema.Types.ObjectId,
    foodList:[{
        type:Schema.Types.ObjectId,
         ref:'foodPackages'

    }]
})

module.exports=mongoose.model("favourates",favourateSchema);