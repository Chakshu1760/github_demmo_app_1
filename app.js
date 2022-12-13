const express = require('express')

const app = express()

const port = process.env.port || 3500

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.send("welcome to the cyclic demo app")
})

app.get('/display',(req,res)=>{
    res.render("display.ejs",{author:'chakshu alawadhi'})
})

app.listen(port,()=>{
    console.log("app is listening at port 3500!!")
})