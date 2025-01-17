import { useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useFetchRecipeNamesQuery } from '../../store';

function SelectRecipe({ onChange }) {
  const [selectedRecipe, setSelectedRecipe] = useState('');

  const doChange = e => {
    setSelectedRecipe(e.target.value);
    onChange(
      recipeNames
        .filter(recipe => recipe.value === e.target.value)
        .map(recipe => recipe.label)
    );
  };

  const { data, error, isLoading } = useFetchRecipeNamesQuery();
  let recipeNames = [];
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    const result = data;
    console.log(data);
    result.map((item, index) => {
      recipeNames[index] = { value: '1', label: '' };
      recipeNames[index].value = index.toString();
      recipeNames[index].label = item.name;
      console.log(recipeNames);
    });
  }

  return (
    <div>
      <FormControl>
        <InputLabel id='select-label'>Select recipe</InputLabel>
        <Select
          labelId='select-label'
          size='small'
          sx={{ width: 300 }}
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

export default SelectRecipe;
