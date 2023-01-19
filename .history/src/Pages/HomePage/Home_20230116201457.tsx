
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewProducts from '../Components/NewProducts/NewProducts'
import PopularCategories from '../Components/PopularCategories/PopularCategories'
import Slider from '../Components/Slider/Slider'
import HomeTabs from '../Components/Tabs/HomeTabs'
import { setCategoryGlobalState } from '../slices/productsSlice'

export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCategoryGlobalState(''))
  },[])


  return (
    <>
      <Slider/>
      {/* <HomeTabs/> */}
      <NewProducts/>
      <PopularCategories/>
    </>
  )
}
