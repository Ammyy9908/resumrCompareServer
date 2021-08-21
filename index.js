const express = require('express');
const resumeRouter = require('./routes/_api');
const mongoose = require('mongoose');
const app = express()
const cors = require('cors');
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/resumeBuilder',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log('Database connected');
}).catch((e)=>{
    console.log('Unfortunately database not connected!');
})
app.use(express.json())
app.use('/api/resume',resumeRouter);
const port = process.env.PORT || 5000;


app.listen(port,()=>{
    console.log(`Application running on ${port}`);
})