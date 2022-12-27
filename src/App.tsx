import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Categories from './Pages/Categories';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/Cart'

import { Routes, Route } from 'react-router-dom';
import AddProductPage from './Pages/AddProductPage';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { getUser } from './slices/userSlice';
import { useDeleteFromCartMutation, useSendToCartMutation } from './api/userApi';



function App() {

    const auth = useSelector((state:RootState)=>state.user.auth)
    const dispatch = useDispatch<AppDispatch>();
    const [sendToCart] = useSendToCartMutation()
    const cart = useSelector((state:RootState)=>state.user.cart)

    const [deleteFromCart] = useDeleteFromCartMutation()

    useEffect(()=>{
      if(auth){
        dispatch(getUser())
        cart.forEach(item=>{
          deleteFromCart(item)
        })
        cart.forEach(item=>{
          sendToCart(item)
        })
      }
    },[auth])

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/addproduct' element={<AddProductPage/>}/>
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
