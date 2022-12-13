const express = require('express')

const app = express()

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.send("welcome to the cyclic demo app")
})

app.get('/display',(req,res)=>{
    res.render("display.ejs",{author:'chakshu alawadhi'})
})

app.listen(3500,()=>{
    console.log("app is listening at port 3500!!")
})