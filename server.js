const express = require('express');
const app = express();
const PORT = 3000;

app.get("/" , (req,res)=>{
    res.json({message:"Welcome to my Backend AI Engineering track by flyrank AI"})
})

app.get("/info",(req,res)=>{
    res.json({status:"success",message:"welcome to info route",TrackID:1 })
})

app.get("/backend",(req,res)=>{
    res.json({
    status:"success",
    message:"welcome to backend route",
    TrackID:2 
})
})

app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
})
