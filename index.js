const express = require("express");
const app=express();

// console.dir(app);  //IT IS BASICALLY A OBJECT WHICH CONTAINS MANY FUNCTION TO EXECUTE ON IT .  

let port=3000;

app.listen(port,()=>{
    console.log(`app is listening at the port ${port}`);
});

app.use((req,res)=>{
    console.log("request recived");
    res.send("this is my paragraph ");
});  


app.get("/",(req,res)=>{
    res.send("THIE IS YOUR HOME PAGE ");
});

app.get("/apple",(req,res)=>{
    res.send("THIE IS YOUR apple PAGE ");
});

app.get("/orange",(req,res)=>{
    res.send("THIE IS YOUR orange PAGE ");
});


//PATH PARAMETERS 

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    console.log(req.params);
    let code = `<h1> THIE IS THE PAGE OF @ ${username}`
    res.send(code);
});



//QUERY STRINGS 

app.get("/search",(req,res)=>{
    let {q}=req.query;
    if (!q){
        res.send("nothing here");
    }
    res.send(`the value is  ${q}`);

});