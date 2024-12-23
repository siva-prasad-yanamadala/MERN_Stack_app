import  express from 'express';
// import products from '../data/products.js';
// import Product from '../models/productModel.js';
// import asyncHandler from '../middleware/asyncHandler.js';
import { getProducts,getProductById } from '../controllers/productController.js';
const router =express.Router();
// router.get('/',asyncHandler(async(req,res)=>{
//     const products =await Product.find({});
//     res.json(products);
//   }));
//   router.get('/:id',asyncHandler(async(req,res)=>{
//      const prodcut=await Product.findById(req.params.id);
//      if(prodcut){
//      return res.json(prodcut);
//      }
//      else{
//      res.status(404);
//      throw new Error('Resource not found');
//      }
//   }));

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
export default router;