import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='container'>
        <p className='mt-10 border-t-2 pt-10 text-xs sm:text-sm mb-10'>
            <span className='mr-2  text-blue-700'>
                <Link to="">
                    Пользовательское соглашение
                </Link>
            </span>
            <span>
                и
                <Link to="" className='ml-2 text-blue-700' >
                  политика конфиденциальности
                </Link>
            </span>
        </p>
    </div>
  )
}
