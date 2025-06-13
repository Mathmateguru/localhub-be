import Post from '../models/postSchema.js';


export const createPost = async (req, res) => {
    const { title, content} = req.body;
    try {

        const newPost = await Post.create({
            title,
            content
            });
        res.status(201)
            .send({ message: 'Community posted successfully', data: newPost });
    } catch (error) {
        res.status(500).send({ message: 'Error posting community', error });
    }
}

export const getPost = async (req, res) => {
    try {
        const post= await Post.find();
        res.status(200).send({ message: 'Post retrieved successfully', data: post });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving post', error });
    }
}