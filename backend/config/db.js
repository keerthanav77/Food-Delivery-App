import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://keerthana:Keerthana777@cluster0.6q1aq.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}