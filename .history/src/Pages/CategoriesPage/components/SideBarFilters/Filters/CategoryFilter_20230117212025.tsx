import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

type CategoryProps ={
    category:string,
    setCategory:React.Dispatch<React.SetStateAction<string>>
}

export default function CategoryFilter(props:CategoryProps) {

    const [open,setOpen] = useState<boolean>(false);

    const globalCategory = useSelector((state:RootState)=>state.products.category)

    const category = props.category || globalCategory

    const handleClick = () => {
      setOpen(!open);
    };

    const onChangeCategory=(e:React.MouseEvent<HTMLDivElement>)=>{
        const selectedCategory = e.currentTarget.dataset.category
        if(selectedCategory){
            props.setCategory(selectedCategory)
        }
    }





  return (
    <div className="pl-5 mb-8 border-b-2 border-[#EFF0F2] pb-8 lg:pl-0">
            <ListItemButton onClick={handleClick} sx={{ pl: 4,paddingLeft:0 }}>
                <ListItemText  primary="Категории" 
                sx={{"& .MuiTypography-root":{
                    fontWeight:500,
                    fontSize:"24px",
                    lineHeight:"32px"
                }
                }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton data-category='Футболки' 
                                    selected={category == "Футболки" && true} 
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Футболки" />

                    </ListItemButton>
                    <ListItemButton data-category='Джемперы' 
                                    selected={category == "Джемперы" && true}
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Джемперы" />

                    </ListItemButton>
                    <ListItemButton data-category='Спортивные костюмы' 
                                    selected={category == "Спортивные костюмы" && true}
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Спортивные костюмы" />

                    </ListItemButton>
                    <ListItemButton data-category='Рубашки' 
                                    selected={category == "Рубашки" && true}
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Рубашки" />

                    </ListItemButton>
                    <ListItemButton data-category='Поло' 
                                    selected={category == "Поло" && true}
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Поло" />

                    </ListItemButton>
                    <ListItemButton data-category='Майки' 
                                    selected={category == "Майки" && true}
                                    sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                    onClick={(e)=>onChangeCategory(e)}>

                        <ListItemText primary="Майки" />

                    </ListItemButton>
                </List>
            </Collapse>
       </div>
  )
}
