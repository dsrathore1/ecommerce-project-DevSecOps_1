require("dotenv").config();
const connectDB =require("./db/connect");
const Product=require("./models/productSchema");

const ProductJson=require("./product.json");

const start=async ()=>{
    try{
        await connectDB(process.env.MONGO_URL);
        await Product.create(ProductJson);
        console.log("sucess");
    }catch(error){
        console.log(error);
    }
}

start();