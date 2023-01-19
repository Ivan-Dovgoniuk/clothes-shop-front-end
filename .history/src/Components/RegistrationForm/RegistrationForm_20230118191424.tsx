import React, { useEffect, useState } from 'react'
import { Link, redirect } from 'react-router-dom';

import ClearIcon from '@mui/icons-material/Clear';
import { LoginForm } from '../LoginForm/LoginForm';

import { registerUser } from '../../slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';


type RegistrationFormProps ={
    showRegistrationForm:boolean,
    onShowRegistrationForm:Function
}

export default function RegistrationForm ({showRegistrationForm,onShowRegistrationForm}:RegistrationFormProps) {

    const [showLoginForm,setShowLoginForm] = useState<boolean>(false)

    const onShowLoginForm = ()=>{
        setShowLoginForm(true)
        onShowRegistrationForm(false)
    }
    const onCloseForm = ()=>{
        onShowRegistrationForm(false)
        setShowLoginForm(false)
    }

    const dispatch = useDispatch<AppDispatch>();
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [repeatPassword,setRepeatPassword] = useState<string>('')
    const auth = useSelector((state:RootState)=>state.user.auth)

    const onRegistration = (e:React.MouseEvent)=>{
        e.preventDefault()
        if(password == repeatPassword){
            dispatch(registerUser({email,password}))
        }else alert('Неверний пароль')
    }

    useEffect(()=>{
            setEmail('')
            setPassword('')
            setRepeatPassword('')
            onCloseForm()
            redirect('/')
    },[auth])
   
   


  return (
    <>
        <div className={`${!showRegistrationForm && 'hidden'}`}>
            <div className='fixed z-20 w-full h-full bg-[Silver] opacity-50'>
            </div>
            <form className='max-w-[560px] w-full min-h-[500px] bg-white fixed z-30 top-[-10%] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-2xl p-3'>
                <div className='flex flex-col'>
                    <div className="flex justify-center w-full relative">
                        <p className='font-bold text-2xl'>Регистрация</p>
                        <div className='absolute right-2 top-1 cursor-pointer' onClick={()=>onCloseForm()}>
                            <ClearIcon/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 p-3'>
                    <label htmlFor="email">
                        E-mail
                    </label>
                    <input type="text" 
                           name="email" 
                           value={email} 
                           placeholder='E-mail' 
                           className='border-2 rounded-lg min-h-[50px] pl-3'
                           onChange={(e)=>setEmail(e.currentTarget.value)}/>
                </div>
                {/* <div className='flex flex-col gap-2 p-3'>
                    <label htmlFor="name">
                        Имя
                    </label>
                    <input type="text" name="name" placeholder='Имя' className='border-2 rounded-lg min-h-[50px] pl-3'/>
                </div> */}
                <div className='flex flex-col gap-2 p-3'>
                    <label htmlFor="password">
                        Пароль
                    </label>
                    <input type="password" 
                           name="password" 
                           value={password} 
                           placeholder='Пароль' 
                           className='border-2 rounded-lg min-h-[50px] pl-3'
                           onChange={(e)=>setPassword(e.currentTarget.value)}/>
                </div>
                <div className='flex flex-col gap-2 p-3'>
                    <label htmlFor="repeat-password">
                        Повторите пароль
                    </label>
                    <input type="password" 
                           name="repeat-password" 
                           value={repeatPassword} 
                           placeholder='Повторите пароль' 
                           className='border-2 rounded-lg min-h-[50px] pl-3'
                           onChange={(e)=>setRepeatPassword(e.currentTarget.value)}/>
                </div>
                <div className="flex justify-center mb-5">
                    <button className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'
                            onClick = {(e)=>{onRegistration(e)}}>
                        Зарегистрироватся
                    </button>
                </div>
                <div className='flex justify-center'>
                    <p className='text-sm font-thin whitespace-nowrap'><span>У вас уже есть аккаунт?</span><Link to="" onClick={onShowLoginForm} className='text-[blue]'>Войдите в свой аккаунт</Link></p>
                </div>
            </form>
        </div>
        <LoginForm  showLoginForm={showLoginForm}
                    onCloseForm = {onCloseForm}
                    onShowRegistrationForm = {onShowRegistrationForm}
                    showRegistrationForm={showRegistrationForm}/>
    </>
  )
}
