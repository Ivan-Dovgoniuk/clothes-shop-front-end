import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

type NewProductSelectProps = {
  setFilter:React.Dispatch<React.SetStateAction<string>>
  filter:string
}

export default function NewProductSelect({filter,setFilter}:NewProductSelectProps) {

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (

      <FormControl className='max-w-[100px] w-full sm:max-w-[200px]'>
        <Select
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          id="demo-simple-select"
          value={filter}
          onChange={handleChange}
          sx={{maxHeight:"47px"}}
        >
          <MenuItem value={"Цена по возрастанию"}>Цена по возрастанию</MenuItem>
          <MenuItem value={"Цена по понижению"}>Цена по понижению</MenuItem>
        </Select>
      </FormControl>

  );
}