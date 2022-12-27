import React, { useEffect, useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Link, redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { loginUser } from '../../slices/userSlice';

type LoginFormProps ={
    showLoginForm:boolean
    onCloseForm:Function
    onShowRegistrationForm:Function
    showRegistrationForm:boolean
}

export default function LoginForm ({showLoginForm,onCloseForm,onShowRegistrationForm,showRegistrationForm}:LoginFormProps) {

    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state:RootState)=>state.user.auth)

    const onLogin = (e:React.MouseEvent)=>{
        e.preventDefault()
        if(password){
            dispatch(loginUser({email,password}))
        }else alert('Введите пароль')
    }

    useEffect(()=>{
            setEmail('')
            setPassword('')
            onCloseForm()
            redirect('/')
    },[auth])


  return (
    <div className={`${!showLoginForm || showRegistrationForm ? 'hidden' : ''}`}>
        <div className='fixed z-20 w-full h-full bg-[Silver] opacity-50'>
       </div>
        <form className='max-w-[560px] w-full min-h-[500px] bg-white fixed z-30 top-[-10%] left-[50%] translate-x-[-50%] translate-y-[50%] rounded-2xl p-3'>
            <div className='flex flex-col'>
                <div className="flex justify-center w-full relative">
                    <p className='font-bold text-2xl'>Вход</p>
                    <div className='absolute right-2 top-1 cursor-pointer' onClick={()=>onCloseForm()}>
                        <ClearIcon/>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 p-3'>
                <label htmlFor="email">
                    E-mail
                </label>
                <input type="email" 
                       name="email" 
                       placeholder='E-mail'
                       value={email}  
                       className='border-2 rounded-lg min-h-[50px] pl-3'
                       onChange={(e)=>setEmail(e.currentTarget.value)}/>
            </div>
            <div className='flex flex-col gap-2 p-3'>
                <label htmlFor="password">
                    Пароль
                </label>
                <input type="password" 
                       name="password" 
                       placeholder='Пароль'
                       value={password} 
                       className='border-2 rounded-lg min-h-[50px] pl-3'
                       onChange={(e)=>setPassword(e.currentTarget.value)}/>
            </div>
            <div className="flex justify-center mb-5">
                <button className='w-[185px] h-[50px] bg-[#7984C0] rounded-lg'
                        onClick={(e)=>onLogin(e)}>
                   Войти
                </button>
            </div>
            <div className='flex justify-center'>
                <p className='text-sm font-thin whitespace-nowrap'><span>У вас еще нет аккаунта?</span><Link to="" onClick={()=>onShowRegistrationForm()} className='text-[blue]'> Пройдите процесс регистрации</Link></p>
            </div>
        </form>
    </div>

  )
}
