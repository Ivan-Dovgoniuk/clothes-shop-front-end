import { FC, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import { addToCart, addToFavorite, removeFromCart, removeFromFavorite } from "../../slices/userSlice";
import { useAddToFavoriteProductsMutation, useDeleteFromCartMutation, useDeleteFromFavoriteProductsMutation, useSendToCartMutation } from "../../api/userApi";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useUserSelector } from '../../hooks/userSelector.hook';
import { useCheckProductStatus } from '../../hooks/checkProductStatus.hook';
import { useProductStatusEditor } from '../../hooks/productStatusEditor.hook';

export type IProduct = {
    _id?:string;
    name?:string;
    thumbnail?:string;
    price:number;
    color?:string;
    short_description?:string;
    full_description?:string;
    size?:string;
    category?:string;
    gender?:string;
    sale?:boolean;
    new_price?:number;
    isNewProduct?:Boolean;
    isLoading?:Boolean
}

export const ProductItem:FC<IProduct> = ({_id,name,thumbnail,price,sale,new_price,isNewProduct,isLoading})=>{

    const [productInCart,setProductInCart] = useState<boolean>(false)
    const [isFavorite,setIsFavorite] = useState<boolean>(false)

    const {cart,favoriteProducts} = useUserSelector()

    const [sendToCart] = useSendToCartMutation()
    const [deleteFromCart] = useDeleteFromCartMutation()
    const [addToFavoriteProducts] = useAddToFavoriteProductsMutation()
    const [deleteFromFavoriteProducts]=useDeleteFromFavoriteProductsMutation()

    const checkProductInCart = useCheckProductStatus(cart,setProductInCart,_id)
    const checkProductIsFavorite = useCheckProductStatus(favoriteProducts,setIsFavorite,_id)
    
    useEffect(()=>{
        checkProductInCart()
    },[cart])

    useEffect(()=>{
        checkProductIsFavorite()
    },[favoriteProducts])

    const editCartActions = useProductStatusEditor(addToCart,sendToCart,removeFromCart,deleteFromCart,_id)

    const onAddToCart = editCartActions.onAdd
    const onRemoveFromCart = editCartActions.onRemove

    const editFavotiteActions = useProductStatusEditor(addToFavorite,addToFavoriteProducts,removeFromFavorite,deleteFromFavoriteProducts,_id)

    const onAddToFavorite = editFavotiteActions.onAdd
    const onRemoveFromFavorite = editFavotiteActions.onRemove

  return (
    <div className={"max-w-[270px] hover:shadow-lg mb-10 rounded-lg"}>
        <Link to={`/product/${_id}`}>
            <div className='relative mb-4'>
                <img className="w-full" src={`${thumbnail}`} alt="" />
                <div className='absolute top-3 left-3 flex gap-2 z-10'>
                    <Link to="#" className= {`${!isNewProduct && 'hidden'} h-7 w-16 text-center bg-white rounded-lg hover:shadow-lg`}>
                        New
                    </Link>
                    <Link to="#" className={`${!sale && 'hidden'} h-7 w-16 text-center bg-[#EB5783] rounded-lg text-white hover:shadow-lg`}>
                        Sale
                    </Link>
                </div>
            </div>
            <div className="flex justify-between border-b-2 pb-3 px-2">
                <span>
                    {name}
                </span>
                <div className={`${sale ? 'block':'hidden'} flex gap-5`}>
                    <span className='text-[#EB5783]'>
                        <s>{`${price}`}</s> ??????
                    </span>
                    <span>
                        {`${new_price}`} ??????
                    </span>   
                </div>
                <div className={`${sale ? 'hidden':'block'} flex gap-5`}>
                    <span>
                        {`${price}`} ??????
                    </span>   
                </div>
            </div>
        </Link>
        <div className="flex gap-3 mt-3 pl-2 pb-2">
            { !isFavorite ?
                <FavoriteBorderIcon color="warning" onClick={onAddToFavorite} className={'cursor-pointer'}/>
                :
                <FavoriteIcon color="warning" onClick={onRemoveFromFavorite} className={'cursor-pointer'}/>
            }

            { !productInCart ?
            <AddShoppingCartIcon onClick={onAddToCart} className={'cursor-pointer'}/>
            :
            <RemoveShoppingCartIcon onClick={onRemoveFromCart} className={'cursor-pointer'}/>
            }
        </div>
    </div>
  )
}
