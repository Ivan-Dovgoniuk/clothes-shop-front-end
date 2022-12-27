import * as React from "react";
import { styled} from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import{ AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const drawerWidth = 375;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
type SideBarMobileProps = {
    children:React.ReactNode;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start"
}));

export default function SideBarMobile(props:SideBarMobileProps) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
                    {props.children}
            <Divider />
        </Drawer>
    </>
  );
}
