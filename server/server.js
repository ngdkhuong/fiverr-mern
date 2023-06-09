import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('MongoDB is connected');
    } catch (error) {
        handleError(error);
    }
};

app.listen(PORT, () => {
    connect();
    console.log(`Server is running ${PORT}`);
});
