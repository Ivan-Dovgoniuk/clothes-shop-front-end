
import React, { FC } from 'react'
import { ResetButton } from '../ResetButton/ResetButton';

import CategoryFilter from '../SideBarFilters/Filters/CategoryFilter';
import ColorFilter from '../SideBarFilters/Filters/ColorFilter';
import PriceFilter from '../SideBarFilters/Filters/PriceFilter';
import SizeFilter from '../SideBarFilters/Filters/SizeFilter';
import SideBarMobile from './SideBarMobile';

type SideBarProps = {
  value:number[],
  setValue:React.Dispatch<React.SetStateAction<number[]>>,
  category:string,
  setCategory:React.Dispatch<React.SetStateAction<string>>,
  color:string,
  setColor:React.Dispatch<React.SetStateAction<string>>,
  sizes:string[],
  setSizes:React.Dispatch<React.SetStateAction<string[]>>,
  onResetFilters:Function,
}

export const SideBar:FC<SideBarProps> = ({value,setValue,category,setCategory,color,setColor,sizes,setSizes,onResetFilters})=>{

  return (
    <>
      <form className='hidden lg:block max-w-[264px] w-full'>
        
          <ResetButton onResetFilters={onResetFilters}/>
      </form>
      <form className='lg:hidden'>
          <SideBarMobile>
              <PriceFilter value={value} setValue={setValue}/>
              <CategoryFilter category={category} setCategory={setCategory}/>
              <SizeFilter sizes={sizes} setSizes={setSizes}/>
              <ColorFilter color={color} setColor={setColor}/>
              <div className='flex w-full justify-center'>
                <button  className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'  onClick={(e)=>onResetFilters(e)}>
                  Reset
                </button>
              </div>
          </SideBarMobile>
      </form>
    </>
  )
}
