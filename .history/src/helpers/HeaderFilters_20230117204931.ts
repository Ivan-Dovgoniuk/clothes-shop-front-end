import { useDispatch } from "react-redux"
import { selectGender, selectSale } from "../slices/productsSlice"

export const onHeaderFilters=()=>{

    const dispatch = useDispatch()
    
    const onMaleGender = ()=>{
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
}  
   