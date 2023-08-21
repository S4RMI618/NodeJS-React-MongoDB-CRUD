import User from "../models/user.models.js";
import bcrypt from 'bcryptjs'
import { createAccessToken } from "../libs/jwt.js";


export const register = async (req, res) => {
    const {email, password, username, address} = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username,
            email,
            password: passwordHash,
            address
        })
        const userSaved = await newUser.save();
          
        const token = await createAccessToken({id: userSaved.id })
        res.cookie('token', token);
        res.json({
            id: userSaved.id,
            username: userSaved.username,
            email: userSaved.email,
            created_at: userSaved.createdAt,
            updated_at: userSaved.updatedAt
        })
    }
    catch (err) {
        res.status(500).json({message : err.message});
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });
        if (!userFound) return res.status(400).json({message: "User not found"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        console.log(password ,userFound.password)
        if (!isMatch) 
            return res.status(400).json({message: "Invalid password"});

        const token = await createAccessToken({id: userFound.id })

        res.cookie('token', token);
        res.json({
            id: userFound.id,
            username: userFound.username,
            email: userFound.email,
            created_at: userFound.createdAt,
            updated_at: userFound.updatedAt
        })
    }
    catch (err) {
        res.status(500).json({message : err.message});
    }
};

export const logOut = (req, res) => {
    res.cookie('token', "", {
        expires : new Date(0)
    })

    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({ message: "User Not Found"})

    return res.json({
        id : userFound.id,
        username : userFound.username,
        email : userFound.email,
        created_at : userFound.createdAt,
        updated_at : userFound.updatedAt
    })
};
