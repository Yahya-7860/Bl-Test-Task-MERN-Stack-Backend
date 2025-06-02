const bcrypt = require('bcrypt');
const userSchema = require('../models/userModel');

const handleRegisterUser = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await userSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await userSchema.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (err) {
        console.error('Register Error:', err);
        res.status(500).json({ message: 'Server error' });
    }
};


module.exports = { handleRegisterUser };
