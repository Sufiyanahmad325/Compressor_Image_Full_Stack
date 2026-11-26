import express, { urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { configDotenv } from 'dotenv'


const app = express()

configDotenv({path:'./.env'})
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(cookieParser())

app.use(cors({origin:['http://localhost:5173'] , credentials:true}))

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});