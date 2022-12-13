/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Chakshu Alawadhi Student ID: 150056208 Date: 12/12/2022 
* 
*  Online (Cyclic) URL: https://dull-jade-sparrow-tux.cyclic.app/display
* 
********************************************************************************/  
 

const express = require('express')

const app = express()

const port = process.env.port || 3500

app.set('view-engine','ejs')

app.get('/',(req,res)=>{
    res.send("welcome to the cyclic demo app    student name = chakshu alawadhi student number = 150056208")
})

app.get('/display',(req,res)=>{
    res.render("display.ejs",{author:'chakshu alawadhi'})
})

app.listen(port,()=>{
    console.log("app is listening at port 3500!!")
})

//https://dull-jade-sparrow-tux.cyclic.app/display