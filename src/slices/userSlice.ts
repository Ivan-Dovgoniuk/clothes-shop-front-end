
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";


type InitialState ={
    auth:boolean,
    role:string,
    favoriteProducts:string[]
    userLoadingStatus:string,
    cart:ICart[]
}

export type ICart = {
    product_id?:string
}

type UserData = {
    email:string,
    password:string,
}

 const initialState:InitialState = {
    auth:true,
    role:'user',
    favoriteProducts:[],
    userLoadingStatus:'idle',
    cart:[]
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (loginData:UserData) => {
            const {request} = useHttp();
            return await request(`http://localhost:5000/login`,"POST",JSON.stringify(loginData));
    }
);

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (registrationData:UserData) => {
            const {request} = useHttp();
            return await request(`http://localhost:5000/registration`,"POST",JSON.stringify(registrationData));
    }
);

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
            const {request} = useHttp();
            return await request(`http://localhost:5000/user`,'GET',null,{"Authorization":`Bearer ${localStorage.getItem('token')}`})
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { 
        addToCart:(state,action:{payload:string})=>{
                state.cart.push({product_id:action.payload})
       },
       removeFromCart:(state,action:{payload:ICart[]})=>{
        state.cart = action.payload 
       },
   },
   extraReducers: (builder) => {
    builder
        .addCase(loginUser.pending, state => {state.userLoadingStatus = 'loading'})

        .addCase(loginUser.fulfilled, (state, action) => {
            state.userLoadingStatus = 'idle';
            localStorage.setItem('token',action.payload.token)
            state.auth = true
        })

        .addCase(loginUser.rejected, state => {
            state.userLoadingStatus = 'error';
        })

        .addCase(registerUser.pending, state => {state.userLoadingStatus = 'loading'})

        .addCase(registerUser.fulfilled, (state, action) => {
            state.userLoadingStatus = 'idle';
            localStorage.setItem('token',action.payload.token)
            state.auth = true
        })

        .addCase(registerUser.rejected, state => {
            state.userLoadingStatus = 'error';
        })

        .addCase(getUser.pending, state => {state.userLoadingStatus = 'loading'})

        .addCase(getUser.fulfilled, (state, action) => {
            const tokenFailed = action.payload.tokenFailed
            if(!tokenFailed){
                const role = action.payload.role
                const favoriteProducts = action.payload.role
                const cart = action.payload.cart
                state.userLoadingStatus = 'idle';
                state.role = role
                state.auth = true
                state.favoriteProducts = favoriteProducts
                if(state.cart.length == 0){
                    state.cart = cart
                }
            }else state.auth = false
           
        })
        .addCase(getUser.rejected, state => {
            state.userLoadingStatus = 'error';
        })
}});

const {actions,reducer} = userSlice;

export default reducer;
export const {
    addToCart,
    removeFromCart
 } = actions;
