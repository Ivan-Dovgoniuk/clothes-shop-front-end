import React from 'react'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import  Link from '@mui/material/Link';



export default function BreadCrumbs() {



  return (
    <div className="bg-[#EFF0F2]">
        <div className='container flex flex-col bg-[#EFF0F2] mb-10 min-h-[100px] justify-center lg:px-[200px]'>
            <h2 className='font-bold text-lg'>Футболки</h2>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="text.primary" href="/">
                    Главная
                </Link>
                <Link
                    underline="hover"
                    color="text.primary"
                    href="/material-ui/getting-started/installation/"
                    >
                    Мужское
                </Link>
                <Typography color="inherit">Футболки</Typography>
            </Breadcrumbs>
        </div>
    </div>
    
  )
}
