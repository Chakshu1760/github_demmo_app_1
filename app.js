const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("welcome to the cyclic demo app")
})

app.listen(3500,()=>{
    console.log("app is listening at port 3500!!")
})