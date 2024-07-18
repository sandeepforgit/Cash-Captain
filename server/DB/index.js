import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoURl = process.env.MONGO_URL;

const connectDb = async () => {
    try {
        const details = await mongoose.connect(mongoURl)
        console.log(details.config);
    } catch (err) {
        console.log("error", err);
        process.exit(1);
    }
}

export default connectDb
