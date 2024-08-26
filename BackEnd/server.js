import express from 'express';
import connectToDatabase from './Database.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
dotenv.config();

connectToDatabase();

app.post('/register',(req,res)=>{
    
})

app.listen(port,()=>{
    console.log(`Server Running at Port ${port}`)
})