import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCategoryGlobalState } from '../../slices/productsSlice'

type CategoryItemProps = {
  name:string,
  image:string
}

export default function CategoryItem({name,image}:CategoryItemProps) {

  const dispatch = useDispatch()

  const onCategoryItem = ()=>{
    dispatch(setCategoryGlobalState(name))
  }

  return (
    <div onClick={onCategoryItem}>
        <Link  to="/categories">
            <img src={image} alt="" className='max-w-[250px] max-h-[250px]' />
        <p className='ml-3 text-lg text-center'>
            {name}
        </p>
        </Link>
    </div>
  )
}
