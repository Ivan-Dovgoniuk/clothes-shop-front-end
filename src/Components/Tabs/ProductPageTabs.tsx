import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface ProductPageTabsProps {
  full_description:string;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ProductPageTabs(props:ProductPageTabsProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',"& .css-1aquho2-MuiTabs-indicator":{backgroundColor:"#7984C0"} }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Описание" {...a11yProps(0)} />
            <Tab label="Доставка" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
            {props.full_description}
        </TabPanel>
        <TabPanel value={value} index={1}>
            <p><strong>Почта:</strong> 50ГРН</p>
            <p><strong>Самовивоз:</strong> Бесплатно</p>
            <p><strong>Доставка из:</strong> Киев</p>
        </TabPanel>
        </Box>
  );
}