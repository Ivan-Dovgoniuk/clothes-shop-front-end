import { useDispatch } from "react-redux"
import { useUserSelector } from "./userSelector.hook";

export const useProductStatusEditor = (
    addToGlobalStateAction?:Function,
    addToDataBaseMutation?:Function,
    removeFromGlobalStateAction?:Function,
    removeFromDataBaseMutation?:Function,
    id?:string,
    
) => {

        const auth = useUserSelector();

        const dispatch = useDispatch();

        const onAdd = ()=>{
            if(id && addToGlobalStateAction ){
                dispatch(addToGlobalStateAction(id))
            }
            if(auth && addToDataBaseMutation){
                addToDataBaseMutation({
                    product_id:id
                })
            }
        }
        const onRemove = ()=>{
            if(id && removeFromGlobalStateAction ){
                dispatch(removeFromGlobalStateAction(id))
            }
            if(auth && removeFromDataBaseMutation){
                removeFromDataBaseMutation({
                    product_id:id
                })
            }
        }

        return {onAdd,onRemove}
}