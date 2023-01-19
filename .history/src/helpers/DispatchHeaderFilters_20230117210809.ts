import { useDispatch } from "react-redux"
import { selectGender, selectSale } from "../slices/productsSlice"

export const onHeaderFilters=(sale:boolean)=>{

    const dispatch = useDispatch()
    
    const onMaleGender = (gender:string)=>{

        dispatch(selectGender('male'))
    }
    const onFemaleGender =()=>{
        dispatch(selectGender('female'))
    }
    const onSale = ()=>{
        dispatch(selectSale(!sale))
    }
    const onAllProducts =()=>{
        dispatch(selectGender(''))
    }

    return {onMaleGender,onFemaleGender,onSale,onAllProducts}
}  
   