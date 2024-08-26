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

const connectDB = async () => {};
mongoose.connect(mongoURI)
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log('MongoDB connection error: ',err));

app.get('/',(req,res) => {
    res.send('Hello World');
})

app.listen(
    port, () => {
        console.log(`Server is running on port ${port}`);
    }
)