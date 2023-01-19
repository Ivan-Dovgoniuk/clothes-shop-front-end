import { useDispatch } from "react-redux"

type ProductStatusEditorArgs = {
    id:string,
    auth:boolean,
    addToGlobalStateAction:Function,
    addToDataBaseMutation:Function,
    removeFromGlobalStateAction:Function,
    removeFromDataBaseMutation:Function
}

export const useProductStatusEditor:Function<ProductStatusEditorArgs> = (id,auth,addToGlobalStateAction,addToDataBaseMutation,removeFromGlobalStateAction,removeFromDataBaseMutation) => {

    const dispatch = useDispatch();

    const onAddToCart = ()=>{
        if(id){
            dispatch(addToGlobalStateAction(id))
        }
        if(auth){
            addToDataBaseMutation({
                product_id:id
            })
        }
    }
    const onRemoveFromCart = ()=>{
        if(id){
            dispatch(removeFromGlobalStateAction(id))
        }
        if(auth){
            removeFromDataBaseMutation({
                product_id:id
            })
        }
    }
}