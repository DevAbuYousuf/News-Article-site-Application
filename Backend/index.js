import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const app = express();
app.use(express.json());
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})