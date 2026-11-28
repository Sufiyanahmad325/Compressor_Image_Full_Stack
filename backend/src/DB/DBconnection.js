import mongoose from 'mongoose'

const connectionWithDB = async(req,res,next)=>{
    try {
        const instance = await mongoose.connect(process.env.MONGODB_URL)
        if(instance){
            console.log(`DataBase Connected Successfully at || =>>>>   ${instance.connection.host}`);
        }
    } catch (error) {
        console.log("Error while connecting with DataBase" , error.message)
        throw error
    }
}

export default connectionWithDB