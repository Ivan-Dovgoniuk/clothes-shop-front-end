import { FC } from "react"
import { CategoryFilter } from "./Filters/CategoryFilter"
import ColorFilter from "./Filters/ColorFilter"
import PriceFilter from "./Filters/PriceFilter"
import SizeFilter from "./Filters/SizeFilter"

type SideBarFiltersProps = {
    value:number[],
    setValue:React.Dispatch<React.SetStateAction<number[]>>,
    category:string,
    setCategory:React.Dispatch<React.SetStateAction<string>>,
    color:string,
    setColor:React.Dispatch<React.SetStateAction<string>>,
    sizes:string[],
    setSizes:React.Dispatch<React.SetStateAction<string[]>>,
}



export const SideBarFilters:FC<SideBarFiltersProps> = ({value,setValue,category,setCategory,color,setColor,sizes,setSizes}) => {
    return(
        <>
            <PriceFilter value={value} setValue={setValue}/>
            <CategoryFilter category={category} setCategory={setCategory}/>
            <SizeFilter sizes={sizes} setSizes={setSizes}/>
            <ColorFilter color={color} setColor={setColor}/>
        </>
    )
}