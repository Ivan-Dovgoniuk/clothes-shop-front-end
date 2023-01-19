import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



type CategoryProps ={
    category:string,
    setCategory:React.Dispatch<React.SetStateAction<string>>
}

export const CategoryFilter:FC<CategoryProps> = (props) => {

    const categories = ['Футболки','Джемперы','Спортивные костюмы','Рубашки','Поло','Майки']

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

                    { categories.map(item => {
                        return(
                            <ListItemButton 
                                data-category= {item} 
                                selected={category == item} 
                                sx={{ pl: 4,paddingLeft:0,'&.Mui-selected':{background:'grey'} }} 
                                onClick={(e)=>onChangeCategory(e)}
                            >
                                <ListItemText primary={item} />
    
                            </ListItemButton>
                        )
                    })}
                    
                </List>
            </Collapse>
       </div>
  )
}
