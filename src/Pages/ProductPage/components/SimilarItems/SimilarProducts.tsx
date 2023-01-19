
import {ProductItem} from "../../../../Components/ProductItem/ProductItem"

export default function SimilarProducts() {
  return (
    <>
        <div className="flex justify-between items-center mb-10">
            <h2 className='font-bold font text-xl leading-4 sm:leading-8 sm:text-2xl'>
                Похожие товары
            </h2>
        </div>
        <div className="flex flex-col items-center sm:grid sm:grid-cols-3 md:grid-cols-4  sm:gap-5 ">
        <ProductItem name={'name'} 
                             _id={'6'}
                             thumbnail={'eee'} 
                             price={5}
                             color='ui'
                             short_description={'d'}
                             full_description={'s'}
                             size={'ss'}
                             category={'2s'}
                             gender={'c'}
                             sale={false}
                             new_price={22}
                            //  new={true}
                />
            </div>
        <div className="flex justify-center pb-8 mb-10">
            <button className='h-12 max-w-[165px] bg-[#7984C0] rounded-xl w-full text-white'>
                Показать еще
            </button>
        </div>
    </>
  )
}
