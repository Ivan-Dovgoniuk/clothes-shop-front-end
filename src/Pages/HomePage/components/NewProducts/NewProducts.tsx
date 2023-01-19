
import { Skeleton } from '@mui/material'
import { useState } from 'react'
import { useGetProductsQuery } from '../../../../api/productsApi'
import NewProductSelect from '../NewProductSelect/NewProductSelect'
import {ProductItem,IProduct} from '../../../../Components/ProductItem/ProductItem'

export default function NewProducts() {

    const [limit,setLimit] = useState<number>(4)
    const [filter, setFilter] = useState("Цена по возрастанию");

    const gender:String = 'male'
    const isNewProduct = true

    const {data,error,isLoading} = useGetProductsQuery({limit,gender,isNewProduct})

    if(isLoading){
        return <Skeleton/>
    }

    const products = data.ProductsOnPage

    let sortedProducts = products.slice()

    if(filter == "Цена по возрастанию"){
        sortedProducts = sortedProducts.sort((a:any,b:any)=>{
            return (
                b.price - a.price
            )
        })
    }else {
        sortedProducts = sortedProducts.sort((a:any,b:any)=>{
            return (a.price-b.price)
        })}

    const numberOfProducts:number = data.number

    if(!products.length){
        return <></>
    }

  return (
    <div className="container">
        <div className="flex justify-between items-center mb-10">
            <h2 className='font-bold font text-xl leading-4 sm:leading-8 sm:text-2xl'>
                Новые товары
            </h2>
            <div className="flex flex-col sm:flex-row sm:gap-5 max-w-[335px] w-full items-center md:gap-10">
                <span>Сортировать:</span>
                <NewProductSelect setFilter={setFilter} filter={filter}/>
            </div>
        </div>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 md:grid-cols-4  sm:gap-5 ">
            {
                sortedProducts ? sortedProducts.map((item:IProduct) => {
                    return (
                        <ProductItem 
                            name={item.name} 
                            _id={item._id}
                            thumbnail={item.thumbnail} 
                            price={item.price}
                            color={item.color}
                            short_description={item.short_description}
                            full_description={item.full_description}
                            size={item.size}
                            category={item.category}
                            gender={item.gender}
                            sale={item.sale}
                            new_price={item.new_price}
                            isNewProduct={item.isNewProduct}
                            key={item._id}
                        />
                    )
                }
                ) : 1
            }
        </div>
        <div className="flex justify-center border-b-2 pb-8 mb-10">
            { numberOfProducts > products.length &&
            <button className='h-12 max-w-[165px] bg-[#7984C0] rounded-xl w-full text-white'
                    onClick={()=>{setLimit(prevLimit=>prevLimit+4)}}>
                Показать еще
            </button>
            }
        </div>
    </div>
  )
}
