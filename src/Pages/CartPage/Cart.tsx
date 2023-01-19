import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BreadCrumbs from '../../Components/BreadCrumbs/BreadCrumbs'
import CartItem from './components/CartItem/CartItem'
import { RootState } from '../../store'

export default function Cart() {

    const cart = useSelector((state:RootState)=> state.user.cart)
    const [numberOfProducts,setNumberOfProducts] = useState<number>(0)
    const [totalPrice,setTotalPrice] = useState<number>(0)

    useEffect(()=>{
        setNumberOfProducts(cart.length)
    },[cart.length])


  return (
    <>
        <section className='container lg:px-[200px] mt-10 min-h-screen'>
            <div>
                <h2 className='font-normal text-2xl mb-10'>
                    Корзина
                </h2>
            </div>
           <div className="flex flex-col lg:flex-row lg:justify-between gap-5">
                <div className='w-full'>
                    <div className="hidden lg:flex border-b-2 justify-between mb-5 pb-3">
                        <p className='max-w-[325px] w-full'>Наименование</p>
                        <p className='max-w-[75px] w-full text-center'>Цена</p>
                        <p className='max-w-[150px] w-full text-center'>Количество</p>
                        <p className='max-w-[75px] w-full text-center'>Стоимость</p>
                    </div>
                    <div>
                        {
                          cart.length ? cart.map((id)=>{
                                if(id){
                                    return <CartItem key={id} 
                                                     setNumberOfProducts={setNumberOfProducts} 
                                                     product_id={id} 
                                                     setTotalPrice={setTotalPrice}
                                                     totalPrice={totalPrice} 
                                                     />
                                }
                            })
                            :
                            <p className={'text-[#989898]'}>У вас пока еще нет товаров в корзине</p>
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-5 max-w-[400px] w-full pt-[35px] px-5 bg-[WhiteSmoke]">
                    <div className="flex justify-between">
                        <p>Всего единиц товара:</p>
                        <p>{numberOfProducts}</p>
                    </div>
                    <div className="flex justify-between font-bold text-2xl">
                        <p>Итого:</p>
                        <p>{totalPrice}ГРН</p>
                    </div>
                    <div className="flex justify-center mb-5">
                        <button className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'>
                            Оформить заказ
                        </button>
                    </div>
                </div>
           </div>
        </section>
    </>

  )
}
