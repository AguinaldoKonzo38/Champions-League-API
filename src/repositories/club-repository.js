import fs from 'fs/promises'

let data = null

try {
    const pathDatabase = process.env.PATHDATABASECLUBS
    const database = await fs.readFile(pathDatabase, "utf-8")
    data = database ? JSON.parse(database) : []


} catch (error) {
    console.log("Error reading database file:", error)
}

export const findAllClubs = async () => {
    return data
}