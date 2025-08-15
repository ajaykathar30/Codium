import mongoose from "mongoose";
const ConnectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO DB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.log("Error connecting to database:", error);

    }
}
export default ConnectDb;