import { json } from "express"
import * as service from "../service/get-players-service.js"
import { ok, noContent } from "../utils/http-helper.js"


export const getPlayer = async (req, res) => {
    const httpResponse = await service.getPlayersService()
    // const response = await ok(data)
    if (httpResponse) {
        res.status(httpResponse.statusCodes).json(httpResponse.body)
    }
}

export const getPlayerById = async (req, res) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.getPlayerByIdService(id)
    res.status(httpResponse.statusCodes).json(httpResponse.body)
}

export const postPlayer = async (req, res) => {
    const bodyValue = req.body
    const httpResponse = await service.createPlayerService(bodyValue)
    if (httpResponse) {
        res.status(httpResponse.statusCodes).json(httpResponse.body)
    }
}

export const deletePlayer = async (req, res) => {
    const id = parseInt(req.params.id)
    const httpResponse = await service.deletePlayerService(id)
    if (httpResponse) {
        res.status(httpResponse.statusCodes).json(httpResponse.body)
    }
}

export const updatePlayer = async (req, res) => {
    const id = parseInt(req.params.id)
    const bodyValue = req.body
    const response = await service.updatePalyerService(id, bodyValue)
    res.status(response.statusCodes).json(response.body)
}