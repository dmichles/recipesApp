import { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

function SelectRecipeByParams({ onChange, recipeNames }) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const doChange = e => {
    setSelectedRecipe(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className='select'>
      <FormControl>
        <InputLabel id='select-label'>Select recipe</InputLabel>
        <Select
          labelId='select-label'
          size='small'
          sx={{ width: 488 }}
          value={selectedRecipe}
          label='Select recipe'
          onChange={doChange}
        >
          {recipeNames.map(item => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectRecipeByParams;
