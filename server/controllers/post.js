import CommunityPost from '../models/postSchema.js';


export const createPost = async (req, res) => {
    const { title, content} = req.body;
    try {

        const newCommunityPost = await CommunityPost.post({
            title,
            content
            });
        res.status(201)
            .send({ message: 'Community posted successfully', data: newCommunityPost });
    } catch (error) {
        res.status(500).send({ message: 'Error posting community', error });
    }
}

export const getPost = async (req, res) => {
    try {
        const communitiesPost= await CommunityPost.find();
        res.status(200).send({ message: 'Communities post retrieved successfully', data: communitiesPost });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving communities post', error });
    }
}