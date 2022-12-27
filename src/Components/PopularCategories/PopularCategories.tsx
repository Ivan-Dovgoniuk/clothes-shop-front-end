import React from 'react'
import CategoryItem from '../CategoryItem/CategoryItem'

import {Link} from 'react-router-dom'

export default function PopularCategories() {

  return (
    <div className="container">
        <div className="flex justify-between mb-10">
            <h2 className='font-bold text-sm'>
                Популярные категории
            </h2>
            <Link to='/categories' className='font-thin leading-5 text-sm text-blue-700'>
                Все категории
            </Link>
        </div>
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <CategoryItem name={'Футболки'}
                        image={'https://zorrov.com/uploads/products/2022/06/product/256993/62a0de87d9913.jpg'}/>
          <CategoryItem name={'Джемпери'} 
                        image={'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/586684/53/fnd/UKR/w/1000/h/1000/fmt/png'}/>
          <CategoryItem name={'Спортивные костюмы'} 
                        image={'https://freever.ua/image/cache/catalog/image/cache/catalog/products/8708/8708-2-00-800x1200.webp'}/>
          <CategoryItem name={'Рубашки'} 
                        image={'https://marathon.ua/image/cache/catalog/jack-wolfskin/1403581_7881-350x350.jpg'}/>
          <CategoryItem name={'Майки'} 
                        image={'https://s3.eu-central-1.amazonaws.com/helen-marlen/catalog/product/cache/1/image/400x/040ec09b1e35df139433887a97daa66f/a/d/ada1d31827f3b8fd75564a6056656a71.jpg'}/>
        </div>
    </div>
  )
}
