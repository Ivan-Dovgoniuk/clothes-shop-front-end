import React from 'react'

export default function HomeTabs() {
  return (
    <div className='container'>
        <div className={"border-b-2 mb-20"}>
            <ul className='flex gap-8'>
                <li className='active:border-b-2 active:border-black'>
                    <a href="">
                        Мужское
                    </a>
                </li>
                 <li className='active:border-b-2 active:border-black'>
                    <a href="">
                        Женское 
                    </a>
                </li>
                <li className='active:border-b-2 active:border-black'>
                    <a href="">
                        Унисекс 
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
