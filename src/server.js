import express from 'express'
import createApp from './app.js'
const app = createApp()

const port = process.env.PORT


app.listen(port, () => {
  console.log(`Servidor iniciado em: http://localhost:${port}`)
})
