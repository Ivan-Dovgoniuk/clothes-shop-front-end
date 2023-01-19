import { useSelector } from "react-redux"
import { RootState } from "../store"


export const useUserSelector = ()=>{
    return useSelector((state:RootState)=>state.user)
    
}