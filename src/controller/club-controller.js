import { json } from "express"
import * as service from "../service/clubs-service.js"


export const getClubs = async (req, res) => {
    const htttpResponse = await service.getClubsService()
    res.status(htttpResponse.statusCodes).json(htttpResponse.body)
}