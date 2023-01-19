
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewProducts from './components/NewProducts/NewProducts'
import PopularCategories from './components/PopularCategories/PopularCategories'
import Slider from './components/Slider/Slider'
import { setCategoryGlobalState } from '../../slices/productsSlice'

export default function Home() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCategoryGlobalState(''))
  },[])


  return (
    <>
      <Slider/>
      <NewProducts/>
      <PopularCategories/>
    </>
  )
}
