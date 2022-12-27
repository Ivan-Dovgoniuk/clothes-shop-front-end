import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { useGetProductQuery } from '../../api/productsApi';
import { Skeleton } from '@mui/material';

type CartProps ={
    setNumberOfProducts:React.Dispatch<React.SetStateAction<number>>,
    setTotalPrice:React.Dispatch<React.SetStateAction<number>>,
    product_id:string,
    totalPrice:number
}

const CartItem = ({setNumberOfProducts,setTotalPrice,product_id,totalPrice}:CartProps) => {

    const [products,setProducts] = useState<number>(1)

    const {data={Product:[],Images:[]},isLoading,error} = useGetProductQuery(product_id)

    const {price,thumbnail,name} = data.Product

    useEffect(()=>{
        if(price){
            setTotalPrice(totalPrice+price)
        }
    },[price])

    const onAddNumberOfProducts =()=>{
        if(products>=0){
            setTotalPrice(totalPrice+price)
        }
    }
    const onSubtractNumberOfProducts = ()=>{
        if(products>0){
            setTotalPrice(totalPrice-price)
        }
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
                            <ClearIcon/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-around items-center max-w-[100px] sm:max-w-[150px] w-full px-3 bg-[Gainsboro] h-12 rounded-md sm:rounded-xl'>
                    <p className='cursor-pointer font-bold text-[#9095A9]'
                       onClick={()=>{setProducts(prev => {
                        if(prev > 0) return prev-1
                        else return prev
                        });
                        setNumberOfProducts(prev=>{
                        if(prev>0) return prev-1
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
        <div className='hidden lg:flex w-full justify-between items-center mb-5'>
            <div className='flex gap-5 max-w-[325px] w-full'>
                <div className="max-w-[110px]">
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
                        if(prev > 0) return prev-1
                        else return prev
                        });
                        setNumberOfProducts(prev=>{
                        if(prev>0) return prev-1
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
        </div>
    </>
  )
}

export default CartItem;