import { useSelector } from "react-redux"
import store, { RootState } from "../store"


const useProductsSelector = ()=>{
    return useSelector((state:RootState)=>state.products)
    
}