import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import {FC, useRef, useState } from 'react';


type SizesProps = {
    sizes:string[]
    setSizes:Function
}



export const SizeFilter:FC<SizesProps> = ({sizes,setSizes}) => {

    const [open,setOpen] = useState<boolean>(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const addSize =(e:React.MouseEvent<HTMLDivElement>)=>{
        const selectedSize = e.currentTarget.dataset.size
     if(selectedSize && sizes.includes(selectedSize)){
        const newSizes = sizes.filter(item=>item !== selectedSize)
        props.setSizes(newSizes)
     }
      else if(selectedSize && !sizes.includes(selectedSize) ){
        const newSizes = sizes.slice()
        newSizes.push(selectedSize)
        props.setSizes(newSizes)
     }
    }

  return (
    <div className="pl-5 mb-8 border-b-2 border-[#EFF0F2] pb-8 lg:pl-0">
            <ListItemButton onClick={handleClick} sx={{ pl: 4,paddingLeft:0 }}>
                <ListItemText  primary="Размер" 
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
                    <ListItemButton data-size='XXL' 
                                    selected={sizes.includes('XXL') && true} 
                                    className={'bg-red-400'} 
                                    sx={{pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}} } 
                                    onClick={(e)=>addSize(e)}
                    >
                        <ListItemText primary="XXL"/>

                    </ListItemButton>
                    <ListItemButton  data-size='XS' 
                                     selected={sizes.includes('XS') && true} 
                                     sx={{ pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}}}
                                     onClick={(e)=>addSize(e)}>

                        <ListItemText primary="XS"/>

                    </ListItemButton>
                    <ListItemButton  data-size='XL' 
                                     selected={sizes.includes('XL') && true} 
                                     sx={{ pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}}} 
                                     onClick={(e)=>addSize(e)}>
                                        
                        <ListItemText primary="XL"/>

                    </ListItemButton>
                    <ListItemButton   data-size='M' 
                                      selected={sizes.includes('M') && true} 
                                      sx={{ pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}}} 
                                      onClick={(e)=>addSize(e)}>

                        <ListItemText primary="M"/>

                    </ListItemButton>
                    <ListItemButton   data-size='L' 
                                      selected={sizes.includes('L') && true} 
                                      sx={{ pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}}}
                                      onClick={(e)=>addSize(e)}>

                        <ListItemText primary="L"/>

                    </ListItemButton>
                </List>
            </Collapse>
       </div>
  )
}
