import express from "express";
import viteExpress from 'vite-express'
import userHandlers from './controller.js'

const app = express()
app.use(express.json())


app.post('/userLogin', userHandlers.handleLogin)


viteExpress.listen(app,8000,()=>{console.log('server live at http://Localhost:8000')})