import express from "express";
import viteExpress from 'vite-express'

const app = express()
app.use(express.json())





viteExpress.listen(app,8000,()=>{console.log('server live at http://Localhost:8000')})