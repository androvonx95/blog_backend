import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import middleware from './middleware/auth.js' ;
import authRoutes from './routes/authRoutes.js';
import ownerRoutes from './routes/ownerRoutes.js';

import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
// import expressValidator from 'express-validator'; // Optional, for custom validators

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // JSON parsing
app.use(helmet()); // Security headers
app.use(cors()); // CORS configuration
app.use(rateLimit()); // Rate limiting
// app.use(expressValidator()); // Input validation

app.get( '/' , (req,res) => {
    res.status(200).send('Hey welcome to my blog...');
});

app.get( '/aboutMe' , (req,res) => {
    res.status(200).send('This is my about me page');
});

app.use( '/posts' , userRoutes );               // user Routes
app.use( '/auth' ,authRoutes );    // authentication routes for blog owner
app.use( '/admin' , middleware ,ownerRoutes );  // owner routes for owner (after authetication)

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen( PORT , () => {
    console.log(`Server listening on http://localhost:${PORT}`)
});

