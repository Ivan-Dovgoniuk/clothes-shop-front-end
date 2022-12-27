
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useDeleteFromCartMutation, useSendToCartMutation } from "../../api/userApi";
import { addToCart, ICart, removeFromCart } from "../../slices/userSlice";
import { useEffect, useState } from 'react';

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

export default function ProductItem({_id,name,thumbnail,price,sale,new_price,isNewProduct,isLoading}:IProduct){

    const [productInCart,setProductInCart] = useState<boolean>(false)

    const auth = useSelector((state:RootState):boolean=>state.user.auth)
    const [sendToCart] = useSendToCartMutation()
    const [deleteFromCart] = useDeleteFromCartMutation()
    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector((state:RootState)=> state.user.cart)

    const filteredCart = cart.filter((item:ICart):boolean | undefined=>{
        if(item){
            return item.product_id !== _id
        }
    })

    const checkProductInCart =()=>{
        const productInCart = cart.filter((item=>{
            return item.product_id == _id
        }))
        if(productInCart.length){
            setProductInCart(true)
        }else setProductInCart(false)   
    }
    
    useEffect(()=>{
        checkProductInCart()
    },[cart])

    const onAddToCart = async () =>{
        if(_id){
            await dispatch(addToCart(_id))
        }
        if(auth){
            await sendToCart({
                product_id:_id
            })
        }
    }
    const onRemoveFromCart = async ()=>{
           await dispatch(removeFromCart(filteredCart))
        if(auth){
           await deleteFromCart({
                product_id:_id
            })
        }
    }


  return (
    <div className={"max-w-[270px] hover:shadow-lg mb-10 rounded-lg"}>
        <Link to={`/product/${_id}`}>
            <div className='relative mb-4'>
                <img className="w-full" src={`${thumbnail}`} alt="" />
                <div className='absolute top-3 left-3 flex gap-2 z-10'>
                    <a className= {`${!isNewProduct && 'hidden'} h-7 w-16 text-center bg-white rounded-lg hover:shadow-lg`} href="">
                        New
                    </a>
                    <a className={`${!sale && 'hidden'} h-7 w-16 text-center bg-[#EB5783] rounded-lg text-white hover:shadow-lg`} href="">
                        Sale
                    </a>
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
            <FavoriteBorderIcon color="action"/>
            { !productInCart ?
            <AddShoppingCartIcon onClick={()=>{onAddToCart()}} className={'cursor-pointer'}/>
            :
            <RemoveShoppingCartIcon onClick={()=>{onRemoveFromCart()}} className={'cursor-pointer'}/>
            }
        </div>
    </div>
  )
}
