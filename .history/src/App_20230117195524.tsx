import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Categories from './Pages/CategoriesPage/Categories';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import Cart from './Pages/CartPage/Cart'

import { Routes, Route } from 'react-router-dom';
import AddProductPage from './Pages/AddProductPage/AddProductPage';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';
import { getUser } from './slices/userSlice';
import { useAddFullCartMutation} from './api/userApi';
import AuthController from './Components/HOC/AuthController';
import FavoriteProducts from './Pages/FavoriteProductPage/FavoriteProducts';



function App() {

    const auth = useSelector((state:RootState)=>state.user.auth)
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state:RootState)=>state.user.cart)

    const [addFullCart] = useAddFullCartMutation()


    useEffect(()=>{
      if(auth){
        dispatch(getUser())
        if(cart.length !==0){
          addFullCart({products_id:cart})
        }
      }
    },[auth])

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/product/:id' element={<ProductPage/>}/>
        <Route path='/cart' element={

                  <AuthController>
                      <Cart/>
                  </AuthController>
        }/>
        <Route path='/addproduct' element={<AddProductPage/>}/>
        <Route path='/favorite' element={<FavoriteProducts/>}/>
      </Routes>
      <Footer/>
    </>
    
  );
}

export default App;
