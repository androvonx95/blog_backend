import express from 'express'
import prisma from '../prismaClient.js'
const router = express.Router();

router.get( '/' , async (req,res) => {
    const allPosts = await prisma.post.findMany();
    console.log( allPosts );
    if ( allPosts.length <= 0 ){
        res.status(204).json(allPosts);
    }
    else{
        res.status(200).json(allPosts);
    }
});

router.get( "/:id" , async ( req , res ) => {
    const id = parseInt( req.params.id );

    if ( isNaN( id ) ){
        return res.status(400).send("Invalid ID");
    }
    const post = await prisma.post.findUnique({
        where: {
            id : id
        }
    });
    if(!post) {
        return res.status(404).send("Post not found");
    }
    else{
        res.status(200).json(post);
    }
    console.log( post )
} );




export default router