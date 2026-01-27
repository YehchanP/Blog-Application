import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_CONNECTION_KEY);
    console.log("DB Connected");
}