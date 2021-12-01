const mongoose = require("mongoose");

const ProductModel = new mongoose.Schema(
    {
        title: {type:String, required:true, unique:true},
        description:{type:String, require:true},
        img: {type:String, required: true},
        category: {type:Array},
        color: {type:String },
        price: {type:Number, required: true },
        size: {type:String,},
        
    }, {timestamps:true}
);

module.exports = mongoose.model("Product", ProductModel);