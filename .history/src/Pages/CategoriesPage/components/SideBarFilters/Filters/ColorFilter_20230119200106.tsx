import {useState } from 'react';

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

export const ColorFilter = (props:ColorProps) => {

    const [open,setOpen] = useState<boolean>(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const onSelectColor=(e:React.MouseEvent<HTMLDivElement>)=>{
        const selectedColor = e.currentTarget.dataset.color
        if(selectedColor){
            props.setColor(selectedColor)
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
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "blue" && true} 
                                    data-color='blue' 
                                    onClick ={(e)=>onSelectColor(e)}>

                        <div className="w-7 h-7 rounded-[32px] bg-[#337AB6]"></div>

                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "green" && true}    
                                    data-color='green' 
                                    onClick ={(e)=>onSelectColor(e)}>

                        <div className="w-7 h-7 rounded-[32px] bg-[#5CB85C]"></div>

                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "orange" && true} 
                                    data-color='orange' 
                                    onClick ={(e)=>onSelectColor(e)}>

                        <div className="w-7 h-7 rounded-[32px] bg-[#F0AC4E]"></div>
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "red" && true} 
                                    data-color='red' 
                                    onClick ={(e)=>onSelectColor(e)}>
                        <div className="w-7 h-7 rounded-[32px] bg-[#FF0000]"></div>

                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "skyblue" && true} 
                                    data-color='skyblue' 
                                    onClick ={(e)=>onSelectColor(e)}>
                        <div className="w-7 h-7 rounded-[32px] bg-[#5BC0DE]"></div>

                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4,paddingLeft:0,textAlign:'center'}} 
                                    selected={props.color == "black" && true} 
                                    data-color='black' 
                                    onClick ={(e)=>onSelectColor(e)}>

                        <div className="w-7 h-7 rounded-[32px] bg-[#121720]"></div>

                    </ListItemButton>
                </List>
            </Collapse>
       </div>
  )
}
