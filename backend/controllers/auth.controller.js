import User from "../models/user.js"
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body
        console.log(req.body)
        // if (!name || !email || !password) {
        //     return res.status(400).json({ message: "please fill out all the fields !! ", success: false })
        // }
        if(!name){
            return res.status(400).json({ message: "Namegdgs is required", success: false })
        }
        if(!email){
            return res.status(400).json({ message: "Email is required", success: false })
        }
        if(!password){
            return res.status(400).json({ message: "Password is required", success: false })
        }
       
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists . Use different email ", success: false })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            name,
            email,
            password: hashedPassword,
        })
        return res.status(201).json({ message: 'Account Created successfully ', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal server error", success: false })
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password ) {
            res.status(400).json({ message: 'please fill all the fields', success: false })
        }
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "User does not exists register first ", success: false })
        }
        const isvalidUser = await bcrypt.compare(password, user.password)
        if (!isvalidUser) {
            return res.status(400).json({ message: 'incorrect email or password ,try again !!' })
        }
        const tokenData = {
            userID: user._id
        }
        user = {
            _id: user._id,
            name: user.name,
            email: user.email,
        }

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' })
        return res.status(200)
                  .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'None',secure:true })
                  .json({ message: `Welcome ${(user.name).toUpperCase()}`, success: true, user })

    }

    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });

    }
}
export const logout = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({ message: "logged out successfully", success: true });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error", success: false });


    }
}

