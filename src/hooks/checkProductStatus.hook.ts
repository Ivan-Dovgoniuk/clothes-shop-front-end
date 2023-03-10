
export const useCheckProductStatus = (productArray:string[],setStateFunction:React.Dispatch<React.SetStateAction<boolean>>,id?:string) =>{

    const checkProduct = ()=>{
        const product = productArray.filter((item=>{
            return item == id
        }))
        if(product.length){
            setStateFunction(true)
        }else setStateFunction(false)   
    }

    return checkProduct
}