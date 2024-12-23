import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const port=process.env.PORT||5000;
connectDB();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.get('/',(req,res)=>{
   res.send('heelllo');
});

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
app.listen(port,()=>{
  console.log(`server running on port ${port}`);
})