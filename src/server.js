import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config(); // This replaces require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


app.get( '/' , (req,res) => {
    res.status(200).send('Hey welcome to my blog...')
});

app.get( '/aboutMe' , (req,res) => {
    res.status(200).send('This is my about me page')
});

app.use( '/posts' , userRoutes );

app.listen( PORT , () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

