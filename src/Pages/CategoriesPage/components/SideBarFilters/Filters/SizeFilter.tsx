import {FC,useState } from 'react';

import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';




type SizesProps = {
    sizes:string[]
    setSizes:Function
}



export const SizeFilter:FC<SizesProps> = ({sizes,setSizes}) => {

    const sizesArr = ['XXL','XS','XL','M','L']

    const [open,setOpen] = useState<boolean>(false);

    const handleClick = () => {
      setOpen(!open);
    };

    const addSize =(e:React.MouseEvent<HTMLDivElement>)=>{
        const selectedSize = e.currentTarget.dataset.size
     if(selectedSize && sizes.includes(selectedSize)){
        const newSizes = sizes.filter(item=>item !== selectedSize)
        setSizes(newSizes)
     }
      else if(selectedSize && !sizes.includes(selectedSize) ){
        const newSizes = sizes.slice()
        newSizes.push(selectedSize)
        setSizes(newSizes)
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

                    {sizesArr.map(item=>{
                        return(

                        <ListItemButton 
                            data-size={item}
                            selected={sizes.includes(item)} 
                            className={'bg-red-400'} 
                            sx={{pl: 4,paddingLeft:0,textAlign:'center','&.Mui-selected':{background:'grey'}} } 
                            onClick={(e)=>addSize(e)}
                            >

                            <ListItemText primary={item}/>

                        </ListItemButton>

                        )
                    })}

                </List>
            </Collapse>
       </div>
  )
}
