import express from 'express'
import { getPlayer } from './controller/players-controller.js'
import router from './routes/router.js'
import cors from 'cors'

function createApp() {
    const app = express()
    app.use(express.json())
    
    //Routes
    app.use("/api", router)

    app.use(cors({
        origin: '*',
        methods: ['GET', 'POST', 'PATCH', 'DELETE']
    }))

    return app
}

export default createApp