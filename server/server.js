import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import orderRoute from './routes/order.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import reviewRoute from './routes/review.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

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

app.use(express.json());
app.use(cookieParser);

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/gigs', gigRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversation', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

app.listen(PORT, () => {
    connect();
    console.log(`Server is running ${PORT}`);
});
