import { useDispatch } from "react-redux"
import { selectGender, selectSale } from "../slices/productsSlice"

export const onHeaderFilters=(sale:boolean)=>{

    const dispatch = useDispatch()
    
    const onGender = (gender:string)=>{
        if(gender == 'male')
        dispatch(selectGender('male'))
        else 
        dispatch(selectGender('female'))
    }
    const onFemaleGender =()=>{
        
    }
    const onSale = ()=>{
        dispatch(selectSale(!sale))
    }
    const onAllProducts =()=>{
        dispatch(selectGender(''))
    }

    return {onMaleGender,onFemaleGender,onSale,onAllProducts}
}  
   