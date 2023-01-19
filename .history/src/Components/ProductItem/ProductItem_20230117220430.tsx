import { FC, useEffect, useState } from 'react';
import { useDispatch} from "react-redux";
import {Link} from 'react-router-dom'

import { AppDispatch} from "../../store";
import { addToCart, addToFavorite, removeFromCart, removeFromFavorite } from "../../slices/userSlice";
import { useAddToFavoriteProductsMutation, useDeleteFromCartMutation, useDeleteFromFavoriteProductsMutation, useSendToCartMutation } from "../../api/userApi";

import { Skeleton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useUserSelector } from '../../hooks/userSelector.hook';
import { useCheckProductStatus } from '../../hooks/checkProductStatus.hook';

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

    const {auth,cart,favoriteProducts} = useUserSelector()

    const [sendToCart] = useSendToCartMutation()
    const [deleteFromCart] = useDeleteFromCartMutation()
    const [addToFavoriteProducts] = useAddToFavoriteProductsMutation()
    const [deleteFromFavoriteProducts]=useDeleteFromFavoriteProductsMutation()

    const dispatch = useDispatch<AppDispatch>()

    const checkProductInCart = useCheckProductStatus(cart,setProductInCart,_id)
    const checkProductIsFavorite = useCheckProductStatus(favoriteProducts,setIsFavorite,_id)
    
    useEffect(()=>{
        checkProductInCart()
    },[cart])

    useEffect(()=>{
        checkProductIsFavorite()
    },[favoriteProducts])

    const onAddToCart = ()=>{
        if(_id){
            dispatch(addToCart(_id))
        }
        if(auth){
            sendToCart({
                product_id:_id
            })
        }
    }
    const onRemoveFromCart = ()=>{
        if(_id){
            dispatch(removeFromCart(_id))
        }
        if(auth){
            deleteFromCart({
                product_id:_id
            })
        }
    }

    const onAddToFavorite = () =>{
        if(_id){
            dispatch(addToFavorite(_id))
        }
        if(auth){
            addToFavoriteProducts({product_id:_id})
        }
    }
    const onRemoveFromFavorite = () =>{
        if(_id){
            dispatch(removeFromFavorite(_id))
        }
        if(auth){
            deleteFromFavoriteProducts({product_id:_id})
        }
    }

    if(isLoading) return <Skeleton/>

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
                        <s>{`${price}`}</s> ГРН
                    </span>
                    <span>
                        {`${new_price}`} ГРН
                    </span>   
                </div>
                <div className={`${sale ? 'hidden':'block'} flex gap-5`}>
                    <span>
                        {`${price}`} ГРН
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
