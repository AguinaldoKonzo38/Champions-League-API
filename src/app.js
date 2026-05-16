import express from 'express'
import { getPlayer } from './controller/players-controller.js'
import router from './routes/router.js'

function createApp() {
    const app = express()
    app.use(express.json())
    
    //Routes
    app.use("/api", router)

    return app
}

export default createApp