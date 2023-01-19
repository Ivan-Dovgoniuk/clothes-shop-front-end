
import React, { useState } from 'react'
import CategoryFilter from '../SideBarFilters/CategoryFilter';
import ColorFilter from '../SideBarFilters/ColorFilter';
import PriceFilter from '../SideBarFilters/PriceFilter';
import SizeFilter from '../SideBarFilters/SizeFilter';
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

export default function SideBar(props:SideBarProps) {

  return (
    <>
      <form className='hidden lg:block max-w-[264px] w-full'>
          <PriceFilter value={props.value} setValue={props.setValue}/>
          <CategoryFilter category={props.category} setCategory={props.setCategory}/>
          <SizeFilter sizes={props.sizes} setSizes={props.setSizes}/>
          <ColorFilter color={props.color} setColor={props.setColor}/>
          <div className='flex w-full justify-center'>
            <button  className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg' onClick={(e)=>props.onResetFilters(e)}>
              Reset
            </button>
          </div>
        
      </form>
      <form className='lg:hidden'>
          <SideBarMobile>
              <PriceFilter value={props.value} setValue={props.setValue}/>
              <CategoryFilter category={props.category} setCategory={props.setCategory}/>
              <SizeFilter sizes={props.sizes} setSizes={props.setSizes}/>
              <ColorFilter color={props.color} setColor={props.setColor}/>
              <div className='flex w-full justify-center'>
              <button  className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'  onClick={(e)=>props.onResetFilters(e)}>
                Reset
              </button>
            </div>
          </SideBarMobile>
      </form>
    </>
  )
}
