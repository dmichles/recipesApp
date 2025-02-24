import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useState } from 'react';

function SelectRecipe({ onSelectChange, recipeNames }) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  function handleSelectChange(e) {
    setSelectedRecipe(e.target.value);
    onSelectChange(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className='break'>
      <FormControl>
        <InputLabel id='select-recipe-label'>Select recipe</InputLabel>
        <Select
          id='select-recipe'
          labelId='select-recipe-label'
          size='small'
          value={selectedRecipe}
          onChange={handleSelectChange}
          label='Select recipe'
          sx={{ width: 488 }}
        >
          {recipeNames.map((name, index) => (
            <MenuItem key={index} value={name.value}>
              {name.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectRecipe;
