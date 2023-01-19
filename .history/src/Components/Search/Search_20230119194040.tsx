import React, { FC, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link,useNavigate, useSearchParams } from 'react-router-dom';
import { useGetProductBySearchFieldQuery } from '../../api/productsApi';
import { useDispatch } from 'react-redux';
import { setSearchFieldGlobalState } from '../../slices/productsSlice';


type SearchProps = {
  searchField:string,
  setSearchField:React.Dispatch<React.SetStateAction<string>>
}

type SearchItem = {
  name:string,
  _id:string
}

export const Search:FC<SearchProps> = ({searchField,setSearchField})=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams)

  const [searchWindowVisibility,setSearchWindowVisibility] = useState<boolean>(true)

  const {data=[],error,isLoading} = useGetProductBySearchFieldQuery({searchField})

  const closeSearchWindow = ()=>{
    document.body.addEventListener('click',(e)=>{
        const element = e.target as HTMLElement
        if(element.tagName !== 'INPUT'){
          setSearchWindowVisibility(false)
        }
    })
  }
  useEffect(()=>{
    closeSearchWindow()
  },[])

  const onSearchButton = (e:React.MouseEvent) =>{
    e.preventDefault()
    if(searchField){
      setSearchParams({search:searchField})
      dispatch(setSearchFieldGlobalState(searchField))
      navigate('/categories')
    }else alert('Введите поисковий запрос')
  }

  return (
    <div className={"h-[60px] w-full bg-black flex items-center"}>
        <div className="container lg:px-[200px]">
            <form className={"flex items-center relative"}>
                <button className={"mr-3"} type="submit" onClick={(e)=>{onSearchButton(e)}}>
                    <SearchIcon sx={{color:"white"}}/>
                </button>
                <input type="text"
                       value = {searchField}
                       className={"bg-black w-full text-white"} 
                       placeholder="Search goods..."
                       onChange={(e)=>setSearchField(e.currentTarget.value)} onFocus={(e)=>setSearchWindowVisibility(true)}/>
                { searchField.length>2 &&    
                <div className={`${!searchWindowVisibility && 'hidden' } flex-col absolute w-[500px] max-h-[250px] bg-white text-black top-11 left-9 z-20 overflow-auto`}>
                  <ul>
                  { data.map((item:SearchItem)=>{
                      return(
                        <Link to={`product/${item._id}`} key={item._id}>
                          <li className='hover:bg-gray-200 p-2'>
                              {item.name}
                          </li>
                        </Link>
                      )
                    })
                  }
                  </ul>
                </div>
                }
            </form>
        </div>
    </div>
  )
}
