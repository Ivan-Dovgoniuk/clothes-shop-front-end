import { useSelector } from "react-redux"
import store, { RootState } from "../store"


const useProductsSelector = ()=>{
    let state = store.getState()
    return useSelector((state:RootState)=>state.products)
    
}