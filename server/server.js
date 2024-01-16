import express, { json } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import User from './models/UserModel.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

const app = express()


// Middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
dotenv.config()

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body

    try{
        if(!name || !email || !password){
            res.status(400).json({
                error: 'No input value can be empty'
            })    
        }

        const hashPassword = bcrypt.hashSync(password, 10)

        const newUser = new User({
            name: name,
            email: email,
            password: hashPassword
        })

        const user = await newUser.save()
    
    }catch(err){
        console.log(err)
    }

})

app.post('/login', async (req, res) => {
    const { email, password } = req.body

    try{
        const user = await User.findOne({email})
        const isValid = bcrypt.compareSync(password, user.password)

        if(isValid){
            jwt.sign(
                { name: user.name, email: user.email, id: user._id },
                process.env.JWT_SECRET, {}, (err, token) => {
                    res.cookie('token', token).json(user)
                }
                )
        }
    }catch(err){
        console.log(err)
    }
    
})

app.get('/profile', (req, res) => {
    const { token } = req.cookies
    
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, data) => {
        res.status(200).json(data)
    })
})



const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on ${port}`)
})