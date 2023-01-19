import { FC } from "react";

type ResetButtonProps = {
    onResetFilters:Function
}

export const ResetButton:FC<ResetButtonProps> = ({onResetFilters}) => {
    return(
        <div className='flex w-full justify-center'>
            <button  className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg' onClick={(e)=>onResetFilters(e)}>
                Reset
            </button>
        </div>
    )
   
}