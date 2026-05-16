export const ok = async (data) => {
    return {
        statusCodes: 200,
        body: data
    }
}

export const noContent = async () => {
    return {
        statusCodes: 204,
        body: {message: "No Player found"}
    }
}

export const badRequest = async () => {
    return {
        statusCodes: 400,
        body: null
    }
}

export const created = async () => {
    return {
        statusCodes: 201,
        body: {message: "Player Created"}
    }
}
