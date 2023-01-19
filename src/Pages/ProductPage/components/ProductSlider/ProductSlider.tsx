import React from 'react'
import ProductSliderDesktop from './ProductSliderDesktop'
import ProductSlideMobile from './ProductSliderMobile'

export type SliderProps ={
   image_1?:string
   image_2?:string
   image_3?:string
   image_4?:string
   image_5?:string
}


export default function ProductSlider(props:SliderProps) {
  return (
    <>
        <div className='hidden xl:block'>
            <ProductSliderDesktop image_1={props.image_1}
                                  image_2={props.image_2}
                                  image_3={props.image_3}
                                  image_4={props.image_4}
                                  image_5={props.image_5}
        />
        </div>
        <div className='block xl:hidden'>
            <ProductSlideMobile image_1={props.image_1}
                                image_2={props.image_2}
                                image_3={props.image_3}
                                image_4={props.image_4}
                                image_5={props.image_5}/>
        </div>
    </>
  )
}
