import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store';
import { useGetProductsQuery } from '../../../../api/productsApi';

import {ProductItem,IProduct} from '../../../../Components/ProductItem/ProductItem';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';







type ProductProps={
    value:number[],
    category:string,
    color:string,
    sizes:string[]
}


export default function Products({value,category,color,sizes}:ProductProps) {

    const [filter, setFilter] = useState("Цена по возрастанию");

    const searchField = useSelector((state:RootState):string=>state.products.searchField)

    const handleChange = (event: SelectChangeEvent) => {
      setFilter(event.target.value as string);
    };

    const [page,setPage] = useState<number>(1)
    const limit:number = 9
    const gender:String = useSelector((state:RootState)=>state.products.gender)
    const sale = useSelector((state:RootState)=>state.products.sale)
    const price = value;
    const size = sizes;
    const globalCategory = useSelector((state:RootState)=>state.products.category)


    const categoryQuery = category || globalCategory

    const {data=[],error,isLoading} = useGetProductsQuery({limit,page,gender,price,size,categoryQuery,color,sale,searchField})
    

    if(isLoading){
        return <><CircularProgress/></>
    }

    const products = data.ProductsOnPage
    const numberOfProducts = data.number

    if(products.length == 0){
        return <><p className='text-lg'>Нет товаров</p></>
    }

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

  return (
    <>
        <div className='flex flex-col justify-start'>
            <div className="flex justify-between items-center gap-3">
                <p className='text-sm'>
                    {`Показано ${numberOfProducts>limit || products.length == limit ? limit * page - limit + 1:1}-${numberOfProducts>limit && products.length == limit  ? limit * page : numberOfProducts} из ${numberOfProducts}`}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    <span className='text-xs sm:text-base' >
                        Сортировать:
                    </span>
                    <FormControl className='max-w-[100px] w-full sm:max-w-[200px]'>
                        <Select
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            id="demo-simple-select"
                            value={filter}
                            onChange={handleChange}
                            sx={{maxHeight:"47px",borderRadius:"16px"}}
                            >
                            <MenuItem value={"Цена по возрастанию"}>Цена по возрастанию</MenuItem>
                            <MenuItem value={"Цена по понижению"}>Цена по понижению</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="flex flex-col items-center sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:gap-6 mt-10">
            {
                sortedProducts && sortedProducts.map((item:IProduct) => {
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
                            isLoading={isLoading}
                        />
                    )
                }
                )
            }
            </div>
            <div className="flex justify-center">
                {numberOfProducts/9>1 && <Pagination count={Math.ceil(numberOfProducts/9)} onChange={(event,page)=>setPage(page)} />}
            </div>
        </div>
    </>
    
  )
}
