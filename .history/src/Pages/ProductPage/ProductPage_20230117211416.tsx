
import ProductSlider from './components/ProductSlider/ProductSlider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import img from '../../../img/Vector.png'
import ProductPageTabs from '../../Components/Tabs/ProductPageTabs';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetProductQuery } from '../../api/productsApi';


export default function ProductPage() {

    useEffect(()=>{
         window.scrollTo(0,0);
    },[])

    const params = useParams();

    const id = params.id

    const {data,error,isLoading} = useGetProductQuery(id)

    const [amountProducts,setAmountProducts]= useState<number>(1)

    if(isLoading){
        return <></>
    }else{

    const {name,price,color,short_description,full_description,size,isNewProduct,sale} = data.Product

    const {image_1,image_2,image_3,image_4,image_5} = data.Images;

  return (
    <>
        <section className="container lg:px-[200px] flex flex-col xl:flex-row gap-5 mb-10 mt-10">
            <div className="flex justify-center">
               { data && <ProductSlider image_1={image_1} 
                                        image_2={image_2}
                                        image_3={image_3}
                                        image_4={image_4}
                                        image_5={image_5}
                                       /> }
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl xl:text-2xl font-bold">
                        {name}
                    </h2>
                        <FavoriteBorderIcon color="action"/>
                </div>
                <div className='flex justify-start gap-5 mb-3'>
                    <Link to="" className={`${!isNewProduct && 'hidden'} h-7 w-16 text-center bg-white rounded-lg hover:shadow-lg border-2 bodrer-black`} >
                        New
                    </Link>
                    <Link to="" className={` ${!sale && 'hidden'} h-7 w-16 text-center bg-[#EB5783] rounded-lg text-white hover:shadow-lg`} >
                        Sale
                    </Link>
                </div>
                <div className="font-bold font-mono text-xl xl:text-2xl mb-3" >
                    <p>{price}</p>
                </div>
                <div className="font-thin mb-6" >
                    <p>{`${short_description}`}</p>
                </div>
                <div className='mb-4'>
                    <ul>
                        <li><strong>Размер: </strong>{size}</li>
                        <li><strong>Цвет: </strong>{color}</li>
                    </ul>
                </div>
                <div className='flex gap-10 mb-5'>
                    <div className='flex justify-around items-center max-w-[100px] sm:max-w-[170px] w-full px-3 bg-[Gainsboro] h-12 rounded-md sm:rounded-xl'>
                        <p 
                            className='cursor-pointer font-bold text-[#9095A9]'
                            onClick={()=>setAmountProducts(prev => {
                                if(prev > 0) return prev-1
                                else return prev
                            })}
                        >
                            -
                        </p>
                        <p>{amountProducts}</p>
                        <p 
                            className='cursor-pointer font-bold text-[#9095A9]'
                            onClick={()=>setAmountProducts(prev=>prev+1)}
                        >
                            +
                        </p>
                    </div>
                    <div className='max-w-[100px] sm:max-w-[170px] w-full flex items-center justify-center bg-[MediumSlateBlue] rounded-md sm:rounded-xl cursor-pointer'>
                        <p>Купить</p>
                    </div>
                </div>
                <div className="flex max-w-[123px] w-full justify-around min-h-[36px] items-center border-2 border-[#EFF0F2] rounded-md cursor-pointer">
                    <p>Спросить</p>
                    <div className='flex items-center'>
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="container">
            <ProductPageTabs full_description={full_description}/>
        </section>
        <section className='container'>
            {/* <SimilarProducts/> */}
        </section>

    </>
  )
}
}
