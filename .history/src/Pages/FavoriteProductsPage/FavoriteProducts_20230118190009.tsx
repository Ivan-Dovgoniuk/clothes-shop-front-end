
import { useSelector } from 'react-redux'
import { useGetFavoriteQuery } from '../../api/userApi'
import { ProductItem , IProduct } from '../../Components/ProductItem/ProductItem'
import { RootState } from '../../store'

export default function FavoriteProducts() {

  const {favoriteProducts} = useUserSelector()

  const {data=[],isLoading} = useGetFavoriteQuery({products_id:favoriteProducts})

  if(!data.length) return <p>There is not favorite products</p>


  
  return (
    <div className='container mt-10'>
        <div className='flex flex-col items-center sm:grid sm:grid-cols-3 sm:gap-6 lg:px-[150px] xl:grid-cols-5 mt-10'>
          { data.map((
                product:IProduct)=>{
                  return(
                      <ProductItem
                        name={product.name} 
                        _id={product._id}
                        thumbnail={product.thumbnail} 
                        price={product.price}
                        color={product.color}
                        short_description={product.short_description}
                        full_description={product.full_description}
                        size={product.size}
                        category={product.category}
                        gender={product.gender}
                        sale={product.sale}
                        new_price={product.new_price}
                        isNewProduct={product.isNewProduct}
                        isLoading={isLoading}
                        key={product._id}/>
                  )      
                }) 
          }
        </div>
    </div>
  )
}
