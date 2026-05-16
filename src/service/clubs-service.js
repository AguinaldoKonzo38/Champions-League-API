import * as httpResponses from "../utils/http-helper.js"
import * as repository from "../repositories/club-repository.js"

export const getClubsService = async (req, res) => {
    let response = null
    const data = await repository.findAllClubs()

    if (data) {
        response = await httpResponses.ok(data)
    } else {
        response = await httpResponses.noContent()
    }

    return response
}