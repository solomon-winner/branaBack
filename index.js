import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

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

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
)