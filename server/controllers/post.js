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

export const getSinglePost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        
         res.status(200).send({ message: 'Post retrieved successfully', data: post });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving post', error });
    }
}

// export const updatePost= async (req, res) => {
//     const { id } = req.params;
//     const { name, description, location, image } = req.body;
//     try {
//         const updatePost = await Post.findByIdAndUpdate(id, {
//             name,
//             description,
//             location,
//             image
//         }, { new: true });
        
//         res.status(200).send({ message: 'Post updated successfully', data: updatePost });
//     } catch (error) {
//         res.status(500).send({ message: 'Error updating Post', error });
//     }
// }

// export const deletePost = async (req, res) => {
//     const { id } = req.params;
//     try {
//        await Post.findByIdAndDelete(id);
//         res.status(200).send({ message: ' Post deleted successfully' });
//     } catch (error) {
//         res.status(500).send({ message: 'Error deleting  post', error });
//     }
// }