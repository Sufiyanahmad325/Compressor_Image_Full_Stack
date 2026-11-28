import dotenv from 'dotenv'
import app from './app.js'
import connectionWithDB from './src/DB/DBconnection.js'


dotenv.config({path:'./.env'})


const PORT = process.env.PORT || 8001
connectionWithDB().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
})