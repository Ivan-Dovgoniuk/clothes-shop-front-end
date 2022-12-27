import { useState } from 'react'
import { useDispatch } from 'react-redux';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Products from '../Components/Products/Products'
import SideBar from '../Components/SideBar/SideBar'
import { setCategoryGlobalState } from '../slices/productsSlice';

export default function Categories() {

  const [value, setValue] = useState<number[]>([1, 2000]);
  const [sizes,setSizes] = useState<string[]>([]);
  const [category,setCategory]= useState<string>('')
  const [color,setColor] = useState<string>('')

  const dispatch = useDispatch()

  const onResetFilters=(e:React.FormEvent)=>{
    e.preventDefault()
    setValue([1, 2000])
    setSizes([])
    setCategory('')
    setColor('')
    dispatch(setCategoryGlobalState(''))
  }

  return (
    <>
        <BreadCrumbs/>
        <div className="container lg:px-[200px] flex justify-between gap-6">
            <Products value={value} sizes={sizes} category={category} color={color}/>
            <SideBar value={value}
                     setValue={setValue}
                     category={category}
                     setCategory={setCategory}
                     sizes={sizes}
                     setSizes={setSizes}
                     color={color}
                     setColor={setColor}
                     onResetFilters={onResetFilters}
            />
        </div>
    </>
  )
}
