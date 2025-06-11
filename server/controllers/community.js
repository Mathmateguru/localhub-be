import Community from '../models/communitySchema.js';


export const createCommunity = async (req, res) => {
    const { name, description, location, image } = req.body;
    try {

        const newCommunity = await Community.create({
            name,
            description,
            location,
            image
        });
        res.status(201)
            .send({ message: 'Community created successfully', data: newCommunity });
    } catch (error) {
        res.status(500).send({ message: 'Error creating community', error });
    }
}

export const getCommunties = async (req, res) => {
    try {
        const communities = await Community.find();
        res.status(200).send({ message: 'Communities retrieved successfully', data: communities });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving communities', error });
    }
}
