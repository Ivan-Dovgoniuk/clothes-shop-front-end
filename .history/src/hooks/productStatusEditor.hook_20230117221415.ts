import { useDispatch } from "react-redux"

export const useProductStatusEditor = (id,auth,addToGlobalStateAction,addToDataBaseMutation,removeFromGlobalStateAction,removeFromDataBaseMutation) =>{

    const dispatch = useDispatch();

    const onAddToCart = ()=>{
        if(id){
            dispatch(addToCart(id))
        }
        if(auth){
            sendToCart({
                product_id:id
            })
        }
    }
    const onRemoveFromCart = ()=>{
        if(id){
            dispatch(removeFromCart(id))
        }
        if(auth){
            deleteFromCart({
                product_id:id
            })
        }
    }
}