import { useSelector } from "react-redux"
import { RootState } from "../store"


const useProductsSelector = ()=>{
    return useSelector((state:RootState)=>state.products)
    
}