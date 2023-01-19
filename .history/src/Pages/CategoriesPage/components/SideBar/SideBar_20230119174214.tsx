
import React, { FC } from 'react'
import { ResetButton } from '../ResetButton/ResetButton';

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
        <SideBarMobile>
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
        </SideBarMobile>
          <ResetButton onResetFilters={onResetFilters}/>
      </form>
    </>
  )
}
