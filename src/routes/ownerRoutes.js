import express from 'express';
import authenticateToken from '../middleware/auth';
import prisma from '../prismaClient.js';
import userRoutes from './userRoutes.js';

const router = express.Router();

// Create a Post/Draft
router.post('newPost/', authenticateToken, async (req, res) => {
    const { title , content , published } = req.body;

    try{
        const newPost = await prisma.post.create( {
            data : {
                title ,
                content ,
                published : Boolean(published)
            }
        } );
        res.status( 201 ).json( { msg : "post created" } );

    }
    catch ( err ){
        console.log( err );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }   
});

// Update a Post 
router.put('updatePost/:id', authenticateToken, async (req, res) => {
    const id = parseInt( req.params.id );
    const { title , content , published } = req.body;

    if ( isNaN( id ) ){
        return res.status(400).send("Invalid ID");
    }

    try{
        const existingPost = await prisma.post.findUnique({
            where: {
                id : id
            }
        });

        if(!existingPost){
            return res.status(404).json( { error : "Post not found"} );
        }

        const updatedPost = await prisma.post.update( {
            where : { id },
            data : {
                title ,
                content ,
                published : Boolean(published)
            }
        } );

        res.status( 200 ).json( { msg : "post updated" } );
    }
    catch ( err ){
        console.log( err );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }

});

// Delete a Post 
router.delete('deletePost/:id', authenticateToken, async (req, res) => {
    const id = parseInt( req.params.id );

    if ( isNaN( id ) ){
        return res.status(400).send("Invalid ID");
    }

    try{
        const post = await prisma.post.delete({
            where: {
                id : id
            }
        });
        res.status( 200 ).json( { msg : "post deleted" } );

    }

    catch ( err ){
        console.log( err );
        res.status( 500 ).json( { error : "Something went wrong" } );
    }

});

router.use('/posts' , userRoutes );

export default router;