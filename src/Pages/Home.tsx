
import NewProducts from '../Components/NewProducts/NewProducts'
import PopularCategories from '../Components/PopularCategories/PopularCategories'
import Slider from '../Components/Slider/Slider'
import HomeTabs from '../Components/Tabs/HomeTabs'

export default function Home() {
  return (
    <>
      <Slider/>
      {/* <HomeTabs/> */}
      <NewProducts/>
      <PopularCategories/>
    </>
  )
}
