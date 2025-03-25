import express from 'express'
import { client } from '@repo/prisma/client'

const app = express();

app.get('/',(req,res) => {
    res.send("active")
})

app.post('/user',async(req,res) => {

    const {username,password} = req.body;
    const user = await client.user.create({
        data: {
            username,
            password
        }
    })

    res.json({
        message:"user created successfully"
    })
})

app.listen(3001)