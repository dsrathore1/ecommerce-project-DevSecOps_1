const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        company:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        colors:{
            type:Array,
            default:[],
        },
        image:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        featured: {
            type:Boolean,
            default:false
        }
})

const Product=mongoose.model("Product",productSchema);

module.exports=Product;