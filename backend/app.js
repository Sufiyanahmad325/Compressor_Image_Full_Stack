import express from 'express'


const app = express()


app.get('/', (req, res) => {
    console.log('<h1>Home route called</h1>')
    res.send('Hello sir')
})

export default app ; 