import { WebSocketServer } from "ws";
import { client } from '@repo/prisma/client'

const ws = new WebSocketServer({
    port:3002
})

ws.on('connection',async (socket)=> {
    socket.send('ws connection established')
    await client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    })

    socket.send('user created successfully')
})