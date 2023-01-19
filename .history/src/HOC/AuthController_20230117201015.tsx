import {ReactNode} from 'react'
import { useSelector } from 'react-redux'
import { Navigate} from 'react-router-dom'
import { RootState } from '../store'

type AuthControllerProps = {
    children:ReactNode
}

export default function AuthController({children}:AuthControllerProps) {

    const auth = useSelector((state:RootState)=>state.user.auth)

    if(!auth){
        return <Navigate to='/'/>
    }

    return <>{children}</>
}
