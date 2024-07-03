import mongoose from 'mongoose'
import "dotenv/config"

const dbConnect = async()=>{ 
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('db connect successfully');
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

dbConnect()