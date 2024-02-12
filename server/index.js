const express = require('express');
const app  = express();
const cors = require('cors')

require('dotenv').config();
const connect = require('./db/connect')

app.use(express.json()); 

const Port = process.env.PORT ||  8080;

const start = async() => {
    try {
        await connect(process.env.MONGO_URI);
        app.listen(Port,()=>{
            console.log(`Server is listening on ${Port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
