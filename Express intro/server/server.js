//npm i express
const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('hello from Express')
})

app.get('/about', (req, res)=>{
    res.send('this is the about Page')
})

app.get('/contact', (req, res)=>{
    res.send('this is the contact Page')
})

app.listen(8005, ()=>{
    console.log('server started on port 8005');
})