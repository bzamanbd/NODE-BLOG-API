import express from "express"  
import "dotenv/config"
import "./config/db_config.js"
const app = express()
const port = process.env.PORT || 3008
app.listen(port,()=>console.log(`server runs on http://localhost:${port}`))