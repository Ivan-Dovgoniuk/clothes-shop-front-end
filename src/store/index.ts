import { configureStore } from '@reduxjs/toolkit';
import  products  from '../slices/productsSlice'; 
import  user  from '../slices/userSlice'; 
import { productsApi } from '../api/productsApi';
import { userApi } from '../api/userApi';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {products,user,[productsApi.reducerPath]: productsApi.reducer,[userApi.reducerPath]: userApi.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productsApi.middleware).concat(userApi.middleware),
})
export default store;