import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import conversationRoute from './routes/conversation.route.js';
import gigRoute from './routes/gig.route.js';
import messageRoute from './routes/message.route.js';
import orderRoute from './routes/order.route.js';
import reviewRoute from './routes/review.route.js';
import userRoute from './routes/user.route.js';

dotenv.config();
mongoose.set('strictQuery', true);
const PORT = process.env.PORT;

const app = express();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB!');
    } catch (error) {
        console.log(error);
    }
};

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/gig', gigRoute);
app.use('/api/message', messageRoute);
app.use('/api/order', orderRoute);
app.use('/api/review', reviewRoute);
app.use('/api/users', userRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';

    return res.status(errorStatus).send(errorMessage);
});

app.listen(PORT, () => {
    connect();
    console.log(`Server is running on ${PORT}`);
});
