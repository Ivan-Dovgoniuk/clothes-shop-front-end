import React, { useEffect, useState } from "react";

import { styled} from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 375;

type SideBarMobileProps = {
    children:React.ReactNode;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function SideBarMobile({children}:SideBarMobileProps) {
  const [open, setOpen] = React.useState(false);

  const desktopWidthQuery = '(min-width:790px)'

  const isDesktop = window.matchMedia(desktopWidthQuery).matches

  const [matches,setMatches] = useState<boolean>(isDesktop);

  useEffect(()=>{
    window
      .matchMedia(desktopWidthQuery)
      .addEventListener('change',e => setMatches(e.matches))
  },[])
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (matches) return <>{children}</>

  return (
    <>  
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <FilterAltIcon />
          </IconButton>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
                width: drawerWidth
            }
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
            </IconButton>
            </DrawerHeader>
            <Divider />
                    {children}
            <Divider />
        </Drawer>
    </>
  );
}
