
import {createSlice} from "@reduxjs/toolkit";

type InitialState ={
    gender:string,
    sale:boolean
    searchField:string,
    category:string
}

 const initialState:InitialState = {
    gender:'',
    sale:false,
    searchField:'',
    category:''
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {  
        selectGender:(state,action:{payload:string})=>{
            state.gender = action.payload;
       },
       selectSale:(state,action:{payload:boolean})=>{
        state.sale = action.payload;
       },
       setSearchFieldGlobalState:(state,action:{payload:string})=>{
        state.searchField = action.payload;
       },
       setCategoryGlobalState:(state,action:{payload:string})=>{
        state.category = action.payload;
       },
       
    }
});

const {actions,reducer} = productsSlice;

export default reducer;
export const {
selectGender,
selectSale,
setSearchFieldGlobalState,
setCategoryGlobalState
 } = actions;
