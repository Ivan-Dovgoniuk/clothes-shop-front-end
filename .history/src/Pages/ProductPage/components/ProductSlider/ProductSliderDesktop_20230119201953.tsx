
import React, {useState } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import type { SliderProps } from "./ProductSlider"



export default function ProductSliderDesktop(props:SliderProps) {

    const [img,setImg] = useState(props.image_1)

    const selectImg = (e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.currentTarget.dataset.img){
            setImg(e.currentTarget.dataset.img)
        }

    }


  return (

    <div className="flex gap-4">
        <div className="flex flex-col gap-4 max-w-[100px] w-full max-h-[500px] overflow-scroll">
            <div  data-img={`${props.image_1}`} onClick={(e)=>selectImg(e)}>
                <img className={"max-w-[100px] w-full hover:drop-shadow-lg"} src={`${props.image_1}`}/>
            </div>
            <div data-img={`${props.image_2}`} onClick={(e)=>selectImg(e)}>
                <img className="max-w-[100px] w-full hover:drop-shadow-lg" src={`${props.image_2}`}/>
            </div>
            <div data-img={`${props.image_3}`} onClick={(e)=>selectImg(e)}>
                <img className="max-w-[100px] w-full hover:drop-shadow-lg" src={`${props.image_3}`} />
            </div>
            <div data-img={`${props.image_4}`} onClick={(e)=>selectImg(e)}>
                <img className="max-w-[100px] w-full hover:drop-shadow-lg" src={`${props.image_4}`} />
            </div>
            <div data-img={`${props.image_5}`} onClick={(e)=>selectImg(e)}>
                <img className="max-w-[100px] w-full hover:drop-shadow-lg" src={`${props.image_5}`} />
            </div>
         </div>
         <Zoom>
            <img
                alt="Loading..."
                src={img}
                width="1285px"
                height="1000px"
            />
        </Zoom>
    </div>
    
  )
}
