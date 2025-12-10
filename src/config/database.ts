import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string)
        console.log("MongoDB connectado")
    } catch(e) {
        console.error("Falha ao conectar banco de dados", e)
    }
}