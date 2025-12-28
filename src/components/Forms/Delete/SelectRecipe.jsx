import { useState } from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@mui/material';

function SelectRecipe({ onChangeSelect, recipeNames }) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const doChange = e => {
    setSelectedRecipe(e.target.value);
    onChangeSelect(e.target.value);
  };

  return (
    <div>
      <div className='select-bottom'>
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
    </div>
  );
}

export default SelectRecipe;
