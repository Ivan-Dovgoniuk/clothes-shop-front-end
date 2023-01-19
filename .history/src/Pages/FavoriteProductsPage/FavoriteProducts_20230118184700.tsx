import { Skeleton } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetFavoriteQuery } from '../../api/userApi'
import { ProductItem , IProduct } from '../../Components/ProductItem/ProductItem'
import { RootState } from '../../store'

export default function FavoriteProducts() {

  const favoriteProducts = useSelector((state:RootState)=>state.user.favoriteProducts)

  const {data,isLoading,isFetching} = useGetFavoriteQuery({products_id:favoriteProducts})

  console.log(data)

  if(isLoading) return <p>Loading...</p>

  if(!data) return <p>There is not favorite products</p>

  
  return (
    <div className='container mt-10'>
        <div className='flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-6 lg:px-[150px] xl:grid-cols-5 mt-10'>
          { data.map(({
              name,
              _id,
              thumbnail,
              price,
              color,
              short_description,
              full_description,
              size,
              category,
              gender,
              sale,
              new_price,
              isNewProduct
            }:IProduct)=>{
                return(
                    <ProductItem
                      name={name} 
                      _id={_id}
                      thumbnail={thumbnail} 
                      price={price}
                      color={color}
                      short_description={short_description}
                      full_description={full_description}
                      size={size}
                      category={category}
                      gender={gender}
                      sale={sale}
                      new_price={new_price}
                      isNewProduct={isNewProduct}
                      isLoading={isLoading}
                      key={_id}/>
                )      
            }) 
          }
        </div>
    </div>
  )
}
