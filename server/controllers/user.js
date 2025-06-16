import User from '../models/userSchema.js';


export const createUser = async (req, res) => {
    const { name, password, email}= req.body;
    try {

        const newUser= await User.create({
            name,
            password,
            email
            });
        res.status(201)
            .send({ message: ' User created successfully', data: newUser});
    } catch (error) {
        res.status(500).send({ message: 'Error creating  user', error });
    }
}

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).send({ message: 'User retrieved successfully', data: user });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving user', error });
    }
}