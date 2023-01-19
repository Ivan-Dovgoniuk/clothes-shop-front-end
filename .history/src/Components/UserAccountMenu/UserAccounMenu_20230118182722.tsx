import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

import { logOut } from '../../slices/userSlice';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';






export default function UserAccountMenu() {

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogOut = {
    logOut()
  }

  return (
    <div>
      <Button
        id="basic-button"
        style={{padding:0}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <PersonIcon sx={{ color: "black" }}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My orders</MenuItem>
        <MenuItem onClick={handleClose}><Link to="/addproduct">Add product</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/favorite">My favorite products</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
