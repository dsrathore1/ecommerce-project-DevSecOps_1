require("dotenv").config();
const express =require("express");
const app=express();
const connectDB =require("./db/connect");


const PORT=process.env.PORT || 5000;

const products_routes=require("./routes/products")

app.get("/",(req,res)=>{
    res.send("hi i am live");
})

// middleware to set router
app.use("/api/products",products_routes);

const start=async ()=>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
            console.log(`connected to port ${PORT}`);
        })
    }catch(error){
        console.log(error);
    }
}

start();
