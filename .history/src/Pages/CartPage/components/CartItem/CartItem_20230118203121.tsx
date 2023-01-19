import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { removeFromCart } from '../../../../slices/userSlice';
import { useGetProductQuery } from '../../../../api/productsApi';
import { useDeleteFromCartMutation } from '../../../../api/userApi';

import ClearIcon from '@mui/icons-material/Clear';
import { Skeleton } from '@mui/material';




type CartProps ={
    setNumberOfProducts:React.Dispatch<React.SetStateAction<number>>,
    setTotalPrice:React.Dispatch<React.SetStateAction<number>>,
    product_id:string,
    totalPrice:number,
}

const CartItem:FC<CartProps> = ({setNumberOfProducts,setTotalPrice,product_id,totalPrice}) => {

    const dispatch = useDispatch()

    const [products,setProducts] = useState<number>(1)

    const {data={Product:[],Images:[]},isLoading,error} = useGetProductQuery(product_id)
    
    const {price,thumbnail,name} = data.Product



    const [deleteFromCart]=useDeleteFromCartMutation()

    useEffect(()=>{
        if(price){
            setTotalPrice(prev=>prev+price)
        }
    },[data])

    const onAddNumberOfProducts =()=>{
        if(products>=0){
            setTotalPrice(totalPrice+price)
        }
    }
    const onSubtractNumberOfProducts = ()=>{
        if(products>1){
            setTotalPrice(totalPrice-price)
        }
    }

    const onRemoveFromCart = ()=>{
        dispatch(removeFromCart(product_id))
        deleteFromCart({product_id})
        setTotalPrice(prev=>prev-price*products)
    }

    if(isLoading){
        return <Skeleton/>
    }

  return (
    <>  
        <div className="pb-4 border-b-2 border-[PeachPuff] lg:hidden mb-5">
            <div className='flex gap-8 mb-4'>
                <div className="max-w-[80px]">
                    <img src={thumbnail} alt="" />
                </div>
                <div className="flex justify-between w-full">
                    <div className='flex flex-col justify-between'>
                        <p>
                            {name}
                        </p>
                        <p className=''>
                            <span className='text-[grey]'>Цена:</span>
                            <span>{price}</span>
                        </p>
                    </div>
                    <div>
                        <div className='cursor-pointer'>
                            <ClearIcon color='warning' onClick={onRemoveFromCart}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-around items-center max-w-[100px] sm:max-w-[150px] w-full px-3 bg-[Gainsboro] h-12 rounded-md sm:rounded-xl'>
                    <p className='cursor-pointer font-bold text-[#9095A9]'
                       onClick={()=>{setProducts(prev => {
                        if(prev > 1) return prev-1
                        else return prev
                        });
                        setNumberOfProducts(prev=>{
                        if(prev>1) return prev-1
                        else return prev
                        })}
                    }
                    >   
                        -
                    </p>
                    <p> {products} </p>
                    <p className='cursor-pointer font-bold text-[#9095A9]'
                        onClick={()=>{setProducts(prev => prev+1);setNumberOfProducts(prev=>prev+1)}}
                    >
                        +
                    </p>
                </div>
                <p><span>Стоимость:</span><span> {price*products}ГРН</span></p>
            </div>
        </div>
        <div className='hidden lg:flex w-full justify-between items-center mb-10 relative'>
            <div className='flex gap-5 max-w-[325px] w-full'>
                <div className="max-w-[110px] relative">
                    <img src={thumbnail} alt="" />
                </div>
                <div className='flex items-center max-w-[200px] w-full'>
                    <p>
                        {name}
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <p>{price}ГРН</p>
            </div>
            <div className='flex justify-around items-center max-w-[150px]  w-full px-3 bg-[Gainsboro] h-12 rounded-xl'>
                <p className='cursor-pointer font-bold text-[#9095A9]'
                    onClick={()=>{setProducts(prev => {
                        if(prev > 1) return prev-1
                        else return prev
                        });
                        setNumberOfProducts(prev=>{
                        if(prev>1) return prev-1
                        else return prev
                        });
                        onSubtractNumberOfProducts()
                    }

                    }
                >
                    -
                </p>
                <p>{products}</p>
                <p className='cursor-pointer font-bold text-[#9095A9]'
                    onClick={()=>{setProducts(prev =>prev+1);setNumberOfProducts(prev=>prev+1);onAddNumberOfProducts()}}
                >
                    +
                </p>
            </div>
            <div className='flex items-center justify-center'>
                <p>{price*products}ГРН</p>
            </div>
            <div className='absolute top-[-20px] left-[-20px] cursor-pointer'>
                    <ClearIcon color='warning' onClick={onRemoveFromCart}/>
            </div>
        </div>
    </>
  )
}

export default CartItem;