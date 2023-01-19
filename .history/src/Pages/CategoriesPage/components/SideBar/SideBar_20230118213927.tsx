
import React, { FC } from 'react'
import { ResetButton } from '../ResetButton/ResetButton';

import CategoryFilter from '../SideBarFilters/Filters/CategoryFilter';
import ColorFilter from '../SideBarFilters/Filters/ColorFilter';
import PriceFilter from '../SideBarFilters/Filters/PriceFilter';
import SizeFilter from '../SideBarFilters/Filters/SizeFilter';
import { SideBarFilters } from '../SideBarFilters/SideBarFilters';
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
          <SideBarFilters 
                    value={value} 
                    setValue={setValue} 
                    category={category}
                    setCategory={setCategory}
                    color={color}
                    setColor={setColor}
                    sizes={sizes}
                    setSizes={setSizes}
          />
          <ResetButton onResetFilters={onResetFilters}/>
      </form>
      <form className='lg:hidden'>
          <SideBarMobile>
              <PriceFilter value={value} setValue={setValue}/>
              <CategoryFilter category={category} setCategory={setCategory}/>
              <SizeFilter sizes={sizes} setSizes={setSizes}/>
              <ColorFilter color={color} setColor={setColor}/>
              <ResetButton onResetFilters={onResetFilters}/>
          </SideBarMobile>
      </form>
    </>
  )
}
