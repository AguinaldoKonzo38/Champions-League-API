import { response } from "express"
import * as playersRepository from "../repositories/player-repository.js"
import * as httpRespose from "../utils/http-helper.js"

export const getPlayersService = async () => {
    const data = await playersRepository.findAllPlayers()
    let response = null

    if (data) {
        response = await httpRespose.ok(data)
    } else {
        response = await httpRespose.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id) => {
    const data = await playersRepository.findPlayerById(id)
    if (data) {
        return httpRespose.ok({ message: "Player found", player: data })
    } else {
        return httpRespose.noContent()
    }
}

export const createPlayerService = async (player) => {
    if (Object.keys(player).length !== 0) {
        await playersRepository.insertPlayer(player)
        return httpRespose.created()
    }
    else {
        return httpRespose.badRequest()
    }
}

export const deletePlayerService = async (id) => {
    let response = null
    const isDeleted = await playersRepository.deletePlayer(id)
    if (isDeleted) {
        response = await httpRespose.ok({ message: "Player deleted" })
    } else {
        response = await httpRespose.badRequest()
    }
    return response
}

export const updatePalyerService = async (id, player) => {
    let response = null
    if (Object.keys(player).length !== 0) {
        await playersRepository.updateOnePlayer(id, player)
        response = await httpRespose.ok(player)
    } else {
        response = await httpRespose.badRequest()
    }

    if(!response){
        response = await httpRespose.noContent()
    }
    
    return response 
}