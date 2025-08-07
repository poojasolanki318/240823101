const express = require("express");
const app = express();
const PORT =80;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello,Mca student!\n");
});
app.get("/show/:id",(req,res)=>{
    res.send(`hello,student!\n ID:${req.params.id}`);
});
app.post("/store",(req,res)=>{
    res.send(`successfully stored record\n ${req.body.name}, ${req.body.city}`);
});
app.put("/update/:id",(req,res)=>{
    res.send(`successfully updated record\nID: ${req.params.id}, name:${req.body.name}, city:${req.body.city}`);
});
app.delete("/delete/:id",(req,res)=>{
    res.send(`successfully deleted record with ID: ${req.params.id}`);
});
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}/`);
});