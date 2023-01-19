import {FC, useState } from 'react';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

type ColorProps ={
    color:string,
    setColor:React.Dispatch<React.SetStateAction<string>>
}

export const ColorFilter:FC<ColorProps> = ({color,setColor}) => {

    const colors = [
        {name:'blue', color:'#337AB6'},
        {name:'green', color:'#5CB85C'},
        {name:'orange', color:'#F0AC4E'},
        {name:'red', color:'#FF0000'},
        {name:'skyblue', color:'#5BC0DE'},
        {name:'black', color:'#121720'},
    ]

    const [open,setOpen] = useState<boolean>(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const onSelectColor=(e:React.MouseEvent<HTMLDivElement>)=>{
        const selectedColor = e.currentTarget.dataset.color
        if(selectedColor){
            setColor(selectedColor)
        }
    }

  return (
    <div className="pl-5 mb-8 border-b-2 border-[#EFF0F2] pb-8 lg:pl-0">
            <ListItemButton onClick={handleClick} sx={{ pl: 4,paddingLeft:0 }}>
                <ListItemText  primary="Цвета" 
                sx={{"& .MuiTypography-root":{
                    fontWeight:500,
                    fontSize:"24px",
                    lineHeight:"32px"
                }
                }} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding sx={{display:"flex"}}>
                    
                    {colors.map(item=>{
                        return(

                            <ListItemButton 
                                sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                selected={color == item.name} 
                                data-color={item.name} 
                                onClick ={(e)=>onSelectColor(e)}>

                                <div className={`w-7 h-7 rounded-[32px] bg-[${item.color}]`}></div>

                            </ListItemButton>
                        )
                    })}

                </List>
            </Collapse>
       </div>
  )
}
