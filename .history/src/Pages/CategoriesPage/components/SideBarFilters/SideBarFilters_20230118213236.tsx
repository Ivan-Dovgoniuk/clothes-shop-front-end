import CategoryFilter from "./Filters/CategoryFilter"
import ColorFilter from "./Filters/ColorFilter"
import PriceFilter from "./Filters/PriceFilter"
import SizeFilter from "./Filters/SizeFilter"

export const SideBarFilters = () => {
    return(
        <>
            <PriceFilter value={value} setValue={setValue}/>
            <CategoryFilter category={category} setCategory={setCategory}/>
            <SizeFilter sizes={sizes} setSizes={setSizes}/>
            <ColorFilter color={color} setColor={setColor}/>
        </>
    )
}