import fs from 'fs/promises'

let database = null

try {
    const data = await fs.readFile(process.env.PATHDATABASEPLAYERS, 'utf-8')
    database = data ? JSON.parse(data) : []
    
} catch (error) {
    console.log("Error reading players database:", error)
}


export const findAllPlayers = async () => {
    return database
}

export const findPlayerById = async (id) => {
    const player = database.find(player => player.id === id)
    return player
}

export const insertPlayer = async (player) => {
    database.push(player)
    await fs.writeFile(process.env.PATHDATABASEPLAYERS, JSON.stringify(database, null, 2))
}

export const deletePlayer = async (id) => {
    const index = database.findIndex(player => player.id === id)
    if (index !== -1) {
        database.splice(index, 1)
        await fs.writeFile(process.env.PATHDATABASEPLAYERS, JSON.stringify(database, null, 2))
        return true
    } else {
        return false
    }

}

export const updateOnePlayer = async (id, player) => {
    const indexFound = database.findIndex((player) => player.id === id)
    if (indexFound !== -1){
        database[indexFound] = {...database[indexFound], ...player}
        await fs.writeFile(process.env.PATHDATABASEPLAYERS, JSON.stringify(database, null, 2))
        return database[indexFound]
        
    } else{
        return false
    }
}