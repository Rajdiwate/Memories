import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}Memories`)
        console.log("mongo db connected")

    } catch (error) {
        console.log("mongodb connection failed" , error)
        process.exit(1);
    }
}

export default connectDB