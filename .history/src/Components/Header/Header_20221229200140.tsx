
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../img/logo.png';
import UserAccountMenu from '../UserAccountMenu/UserAccounMenu';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Search from '../Search/Search';
import {Link} from 'react-router-dom'
import { selectGender, selectSale } from '../../slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';

export default function Header() {

    const auth = useSelector((state:RootState) => state.user.auth)

    const dispatch = useDispatch();
    const sale = useSelector((state:RootState) => state.products.sale)
    const gender = useSelector((state:RootState) => state.products.gender)
    const cart = useSelector((state:RootState)=> state.user.cart)

    const [showRegistrationForm,setShowRegistrationForm] = useState<boolean>(false)
    const [searchField,setSearchField] = useState<string>('')

    const onMaleGender = ()=>{
        dispatch(selectGender('male'))
    }
    const onFemaleGender =()=>{
        dispatch(selectGender('female'))
    }
    const onSale = ()=>{
        dispatch(selectSale(!sale))
    }
    const onAllProducts =()=>{
        dispatch(selectGender(''))
    }

    const onShowRegistrationForm = (x=true)=>{
        setShowRegistrationForm(x)
    }


  return (
    <>
    <div className={"container lg:px-[200px]"}>
            <div className={"flex mt-5 pb-8 w-full justify-between"}>
                <div className="max-w-[100px] lg:max-w-[200px]">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="hidden sm:block">
                    <ul className={"flex justify-between gap-6 max-w-[400px] w-full"}>
                        <li className={`hover:underline ${gender == 'male' ? 'text-green-500':'text-black'}`} onClick={onMaleGender}>
                            <Link to="/categories">
                                Мужское
                            </Link>
                        </li>
                        <li className={`hover:underline ${gender == 'female' ? 'text-green-500' :'text-black' }`} onClick={onFemaleGender}>
                            <Link to="/categories">
                                Женское
                            </Link>
                        </li>
                        <li className={`hover:underline ${!gender ? 'text-green-500':'text-black'}`} onClick={onAllProducts}>
                            <Link to="/categories">
                                Все товари
                            </Link>
                        </li>
                        <li className={`hover:underline ${sale && 'text-pink-600'} `} onClick={onSale}>
                            <Link to="/categories">
                                Sale
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={"justify-between flex max-w-[100px] w-full"}>
                    <div className="h-full flex max-w-[100px] w-full sm:hidden ">
                        <BurgerMenu/>
                    </div>
                    <div className="relative flex">
                       {auth ? <Link to="/cart">
                            <ShoppingCartIcon/>
                        </Link> :
                        <Link to='' onClick={()=>onShowRegistrationForm()}>
                             <ShoppingCartIcon/>
                        </Link>
                        }
                        <span className={"absolute text-red-700 right-[-10px]" }>{cart.length}</span>
                    </div>
                   {auth ? <UserAccountMenu/> : <PersonIcon sx={{ color: "black",cursor:'pointer' }} onClick={()=>onShowRegistrationForm()}/>}
                </div>
            </div>
        </div>
        <Search searchField={searchField} setSearchField={setSearchField}/>
        <RegistrationForm showRegistrationForm={showRegistrationForm}
                          onShowRegistrationForm={onShowRegistrationForm}/>
    </>
        
  )
}
