import { IProduct } from "../Components/ProductItem/ProductItem"


export const checkProductStatus = (productArray:IProduct,setStateFunction) =>{

    const checkProduct =()=>{
        const product = productArray.filter((item=>{
            return item == _id
        }))
        if(product.length){
            setProductInCart(true)
        }else setProductInCart(false)   
    }

    const checkProductIsFavorite =()=>{
        const favorite = favoriteProducts.filter((item=>{
            return item == _id
        }))
        if(favorite.length){
            setIsFavorite(true)
        }else setIsFavorite(false)   
    }
}