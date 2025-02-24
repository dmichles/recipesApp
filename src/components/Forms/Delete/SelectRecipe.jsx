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
  };

  const doClick = () => {
    onChangeSelect(selectedRecipe);
  };

  return (
    <div>
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
      {selectedRecipe !== '' && (
        <Button
          className='button-ingredient'
          variant='contained'
          size='medium'
          onClick={doClick}
        >
          Delete recipe
        </Button>
      )}
    </div>
  );
}

export default SelectRecipe;
