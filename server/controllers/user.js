import User from '../models/userSchema.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config()

export const signup = async (req, res) => {
    const saltRounds = 10;
    const { name, email, picture, password } = req.body;
    if (!name || !password || !email) {
        res.status(400).send({ message: 'Please include all fields', status: 'error' })
    }

    try {
        // check if the user with same email is already signed up
        const userExist = await User.findOne({ email })

        if (userExist) {
            res.status(400).send({ message: 'user already exist', status: 'error' })
        }


        // creating the user
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        const newUser = await User.create({
            name,
            email,
            picture,
            password: hashedPassword
        })
        res.status(201).send({ message: 'User created successfully', data: newUser, status: 'success' });

    } catch (e) {
        res.status(500).send({ message: 'error signing up', e })
    }

}

export const login = async (req, res) => {
    try {
        // check user isexist? if no throw error, if yes next stage 
        // check if pwd is correct, if no - throw error, if yes create token 
        const { email, password } = req.body;

        const user = await User.findOne({ email })


        if (!user) {
            res.stautus(400).send({ message: ' User not found' })
        }
        const passwordIsCorrect = await bcrypt.compare(password, user.password)

        if (!passwordIsCorrect) {
            res.stautus(400).send({ message: ' User not found' })
        }

        const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).send({
            message: 'user successfully login',
            status: 'success',
            data: user,
            accessToken: token
        })

    } catch (e) {
        res.status(500).send({ message: 'error signing up', e })
    }

}

export const createUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {

        const newUser = await User.create({
            name,
            password,
            email
        });
        res.status(201)
            .send({ message: ' User created successfully', data: newUser });
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

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);

        res.status(200).send({ message: 'User retrieved successfully', data: user });
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving user', error });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, password, email } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            name,
            password,
            email
        }, { new: true });

        res.status(200).send({ message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.findByIdAndDelete(id);
        res.status(200).send({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting user', error });
    }
}

