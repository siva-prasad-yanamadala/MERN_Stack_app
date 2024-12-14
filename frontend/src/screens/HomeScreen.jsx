
// import { useEffect,useState } from 'react';
import {Row, Col} from 'react-bootstrap';
// import axios from 'axios';
import Product from '../components/Product';

import { useGetProductsQuery } from '../slices/productsApislice';
import Loader from '../components/Loader';
import Message from '../components/Message';
const HomeScreen = () => { 
   const {data:products,isLoading,error}=useGetProductsQuery();
//   const [products,setProducts]=useState([]);
//   useEffect(()=>{
//      const fetchProdcuts=async()=>{
//       const {data} =await axios.get('/api/products');
//       setProducts(data);
//      };
//      fetchProdcuts(); 
//   },[]);
  return (
    <>
    {isLoading?(
      <Loader/>
      ):error?(<Message variant='danger'>{error?.data?.message||error.error} </Message>

      ):(
      <>
    <h1>Lastest Products</h1>
    <Row>
       {
           products.map((product)=>(
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               
               <Product product={product}/>
              </Col>
           ))
       }
    </Row>
    </>)}
         
    </>
  );
};

export default HomeScreen