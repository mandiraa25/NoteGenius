import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import auth from './routes/auth.route.js';
import Note from './routes/note.js';
import ord from './routes/image.route.js';
import admin from './routes/admin.route.js';





import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('it is connected');
})
.catch((err) => {
    console.log(err);
})
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})



app.use('/api/auth', auth);
app.use('/api/note', Note);
app.use('/api/reco', ord);
app.use('/api/admin', admin);








app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})
 