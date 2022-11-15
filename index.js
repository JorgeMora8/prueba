import express from "express"; 

const app = express(); 

app.get("/", (req, res) => { 
    res.send("Hello world")
})

app.get("/", (req, res) => { 
    res.send("Una vez mas vamos a modificar nuestra informacion")
})