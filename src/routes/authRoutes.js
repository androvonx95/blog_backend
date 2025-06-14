import express from 'express';
import jwt from 'jsonwebtoken';
import prisma from '../prismaClient.js';
import bcrypt from 'bcrypt';

const router = express.Router();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

router.post( '/register' , async ( req , res ) => {

    const { username , password } = req.body ;
    const hashedPwd = bcrypt.hashSync( password , 10 );
    const ip_address = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    try{
        const user = await prisma.user.create( {
            data : {
                username , 
                password : hashedPwd ,
                ip_address
            }
        } );

        const token = jwt.sign( { id : user.id , username : user.username} , JWT_SECRET_KEY , {
            expiresIn : '10h'
        } );
        res.status(201).json( { msg : "User registered" , token } );

    }
    catch( err ){
        console.log( { error : err.message } );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }
});


router.post( '/login' , async ( req , res ) => {

    const { username , password } = req.body ;

    try{
        const user = await prisma.user.findUnique( {
            where : {
                username 
            }
        } );

        if(!user){
            return res.status( 401 ).json( { error : "User not found" } );
        }

        const passwordIsValid = bcrypt.compareSync( password ,user.password );
        if (!passwordIsValid){
            return res.status(401).send( { message : "Invalid password"});
        }

        const token = jwt.sign( { id : user.id , username : user.username} , JWT_SECRET_KEY , {
            expiresIn : '10h'
        } );
        res.status(201).json( { msg : "User Logged in" , token } );

    }
    catch( err ){
        console.log( { error : err } );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }
});

export default router;