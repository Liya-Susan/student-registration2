const express = require('express')
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const routes = require('./routes/index')

require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json())

const url = process.env.ATLAS_URL;

mongoose.connect(url,{useUnifiedTopology:true},(err)=>console.log(console.log("connection created",err)))

app.use('/',routes);

const port = process.env.PORT

app.listen(port,() =>{
    console.log('server is running on port:',port)
})


//VeVy6KT1wXSRiV8D