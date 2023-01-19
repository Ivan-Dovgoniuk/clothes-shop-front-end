

export const checkProductStatus = (productArray,setStateFunction) =>{

    const checkProduct =()=>{
        const product = cart.filter((item=>{
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