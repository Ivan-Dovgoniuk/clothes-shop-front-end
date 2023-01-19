import { useDispatch } from "react-redux"
import { selectGender, selectSale } from "../slices/productsSlice"

export const useHeaderFilters=(sale:boolean)=>{

    const dispatch = useDispatch()
    
    const onGender = (gender:string)=>{
        console.log(gender)
        if(gender == 'Мужское')
        dispatch(selectGender('male'))
        else 
        dispatch(selectGender('female'))
    }
    const onSale = ()=>{
        dispatch(selectSale(!sale))
    }
    const onAllProducts =()=>{
        dispatch(selectGender(''))
    }

    return {onGender,onSale,onAllProducts}
}  
   