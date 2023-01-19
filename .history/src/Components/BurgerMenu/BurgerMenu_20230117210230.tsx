import { Toolbar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react'
import { selectGender, selectSale } from '../../slices/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { onHeaderFilters } from '../../helpers/DispatchHeaderFilters';
import { useProductsSelector } from '../../hooks/productsSelector.hook';

export default function BurgerMenu() {


const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
    const sale = useSelector((state:RootState) => state.products.sale)
    const gender = useProductsSelector()

    const [showRegistrationForm,setShowRegistrationForm] = useState<boolean>(false)

    const {onSale,onMaleGender,onFemaleGender,onAllProducts}=onHeaderFilters(sale)

  return (
    <>
        <Toolbar sx={{padding:'0',maxWidth:'50px',width:100,display:"flex",justifyContent:"center",alignItems:'center',minHeight:0}}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2,p:0 }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>

                        <Link to="/categories" onClick={onMaleGender}>
                            Мужское
                        </Link>

            </MenuItem>
            <MenuItem onClick={handleClose}>

                        <Link to="/categories" onClick={onFemaleGender}>
                            Женское
                        </Link>
                        
            </MenuItem>
            <MenuItem onClick={handleClose}>

                        <Link to="/categories" onClick={onAllProducts}>
                            Все товари
                        </Link>

            </MenuItem>
            <MenuItem onClick={handleClose}>

                        <Link to='/categories' className='text-red-700' onClick={onSale}>
                            Sale
                        </Link>
                        
            </MenuItem>
        </Menu>
    </>
        
         

  )
}
