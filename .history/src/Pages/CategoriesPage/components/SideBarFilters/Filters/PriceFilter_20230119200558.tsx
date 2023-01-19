import React, { FC, useEffect } from 'react'

import Slider from '@mui/material/Slider';

type PriceFilterProps = {
  value:number[],
  setValue:Function
}


export const PriceFilter:FC<PriceFilterProps> = ({value,setValue}) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
      props.setValue(newValue as number[]);
     
    };

  return (
    <div className="pl-5 mb-8 border-b-2 border-[#EFF0F2] pb-8 lg:pl-0">
            <p className='mb-5 text-2xl'>
                Цена
            </p>
                <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={2000}
                min={1}
                sx={{
                    width:'267px',
                    color: 'success.main',
                    '& .MuiSlider-thumb': {
                    borderRadius: '9px',
                    height:'9px',
                    width:'9px',
                    color:'black'
                    },
                    '& .MuiSlider-track': {
                    color:"white"
                    },
                    '& .MuiSlider-rail': {
                    color:"black",
                    height:"2px"
                    }

                }}
                />
            <p>{value[0]} ГРН - {value[1]} ГРН</p>
        </div>
  )
}
