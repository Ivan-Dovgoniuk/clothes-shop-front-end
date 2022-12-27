import React from 'react'

export default function Footer() {
  return (
    <div className='container'>
        <p className='mt-10 border-t-2 pt-10 text-xs sm:text-sm mb-10'>
            <span className='mr-2  text-blue-700'>
                <a href="">
                    Пользовательское соглашение
                </a>
            </span>
            <span>
                и
                <a className='ml-2 text-blue-700' href="">
                  политика конфиденциальности
                </a>
            </span>
        </p>
    </div>
  )
}
