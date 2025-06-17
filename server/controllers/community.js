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

export  const getSingleCommunity = async (req, res) => {
    const { id } = req.params;
    try {
        const community = await Community.findById(id);
        
         res.status(200).send({ message: 'Community retrieved successfully', data: community });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving community', error });
    }
}

export const updateCommunity = async (req, res) => {
    const { id } = req.params;
    const { name, description, location, image } = req.body;
    try {
        const updatedCommunity = await Community.findByIdAndUpdate(id, {
            name,
            description,
            location,
            image
        }, { new: true });
        
        res.status(200).send({ message: 'Community updated successfully', data: updatedCommunity });
    } catch (error) {
        res.status(500).send({ message: 'Error updating community', error });
    }
}


 export const deleteCommunity = async (req, res) => {
    const { id } = req.params;
    try {
       await Community.findByIdAndDelete(id);
        res.status(200).send({ message: 'Community deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting community', error });
    }
}
