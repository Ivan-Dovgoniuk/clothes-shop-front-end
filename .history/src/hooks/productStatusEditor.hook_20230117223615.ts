import { useDispatch } from "react-redux"

export const useProductStatusEditor = (
    addToGlobalStateAction:Function,
    addToDataBaseMutation:Function,
    removeFromGlobalStateAction:Function,
    removeFromDataBaseMutation:Function,
    id?:string,
    
) => {

        const dispatch = useDispatch();

        const onAdd = ()=>{
            if(id){
                dispatch(addToGlobalStateAction(id))
            }
            if(auth){
                addToDataBaseMutation({
                    product_id:id
                })
            }
        }
        const onRemove = ()=>{
            if(id){
                dispatch(removeFromGlobalStateAction(id))
            }
            if(auth){
                removeFromDataBaseMutation({
                    product_id:id
                })
            }
        }

        return {onAdd,onRemove}
}