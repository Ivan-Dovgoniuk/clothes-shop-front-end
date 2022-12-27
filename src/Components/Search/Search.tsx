import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link,useNavigate } from 'react-router-dom';
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

export default function Search({searchField,setSearchField}:SearchProps) {

  const {data=[],error,isLoading} = useGetProductBySearchFieldQuery({searchField})
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSearchButton = (e:React.MouseEvent) =>{
    e.preventDefault()
    if(searchField){
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
                       onChange={(e)=>setSearchField(e.currentTarget.value)}/>
                { searchField.length>2 &&    
                <div className="flex-col absolute w-[500px] max-h-[250px] bg-white text-black top-11 left-9 z-10 overflow-auto">
                  <ul>
                  { data.map((item:SearchItem)=>{
                      return(
                        <li className='hover:bg-gray-200 p-2' key={item._id}>
                          <Link to={`product/${item._id}`}>
                            {item.name}
                          </Link>
                        </li>
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
