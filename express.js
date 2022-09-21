const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.end('Hi,This my second Node-handson')
})
app.get('/route/api/main',(req,res)=>{
    res.end(`Express is Fast, unopinionated, minimalist web framework for Nodejs.`)
})

app.listen(4001,()=>{
    console.log('The server is running on port number 4001')
})