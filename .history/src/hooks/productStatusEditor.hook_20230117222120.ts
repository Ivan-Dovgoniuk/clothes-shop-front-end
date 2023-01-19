import { useDispatch } from "react-redux"

export const useProductStatusEditor = (
    id:string,
    auth:boolean,
    addToGlobalStateAction:Function,
    addToDataBaseMutation:Function,
    removeFromGlobalStateAction:Function,
    removeFromDataBaseMutation:Function
) => {

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