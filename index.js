import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import CategoryRoutes from './routes/category.js';
import UserRoutes from './routes/user.js';
import BookRoutes from './routes/book.js';
import BankRoutes from './routes/bankAccount.js';
import AuthorRoutes from './routes/author.js';
import AuthRoutes from './routes/authentication.js';
import AddressRoutes from './routes/address.js';

dotenv.config();

const app = express();
const port  = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
    await mongoose.connect(mongoURI)
    console.log('MongoDB connected')
    } catch (error) {
    console.log('MongoDB connection error: ',error.message);
    console.log('Stack trace: ',error.stack);
    process.exit(1); 
    }
};

connectDB();

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.use('/api/users', UserRoutes);
app.use('/api/categories', CategoryRoutes);
app.use('/api/books', BookRoutes);
app.use('/api/bank', BankRoutes);
app.use('/api/authors', AuthorRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/address', AddressRoutes);

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
);