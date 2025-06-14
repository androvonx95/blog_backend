import express from 'express'
import prisma from '../prismaClient.js'
const router = express.Router();

// View all Posts
router.get( '/' , async (req,res) => {
    try{
        const allPosts = await prisma.post.findMany();
        return res.status(200).json(allPosts);

    }
    catch ( err ){
        console.log( err );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }    
});

// View specific post
router.get( "/:id" , async ( req , res ) => {
    const id = parseInt( req.params.id );

    if ( isNaN( id ) ){
        return res.status(400).send("Invalid ID");
    }
    try{
        const post = await prisma.post.findUnique({
            where: {
                id : id
            }
        });

        return res.status(200).json(post);
    }
    catch(err){
        console.log( err );
        return res.status( 500 ).json( { error : "Something went wrong" } );        
    }

} );




export default router