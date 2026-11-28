import cookieParser from 'cookie-parser'
import express from 'express'
import cors from 'cors'


const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(cors({origin:['http://localhost:5173'] , credentials:true}))




app.get('/', (req, res) => {
    console.log('<h1>Home route called</h1>')
    res.send('Hello sir')
})


export default app ; 