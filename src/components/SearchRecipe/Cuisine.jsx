import { useState } from 'react';
import { useFetchCusinesQuery } from '../../store';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

function Cuisine({ onCuisineChange }) {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  let cuisines = [];
  const { data, error, isLoading } = useFetchCusinesQuery();
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    const result = data;
    console.log(result);

    result.map((cuisine, index) => {
      cuisines[index] = { value: '', label: '' };
      cuisines[index] = { value: index, label: cuisine.cuisineName };
    });
  }

  function handleCuisineChange(cuisine) {
    setSelectedCuisine(cuisine.target.value);
    const [value] = cuisines
      .filter(item => item.value === cuisine.target.value)
      .map(item => item.label);
    onCuisineChange(value);
  }

  return (
    <div className='select'>
      <FormControl>
        <InputLabel id='select-label'>Select cuisine</InputLabel>
        <Select
          labelId='select-label'
          value={selectedCuisine}
          label='Select cuisine'
          onChange={handleCuisineChange}
          size='small'
          sx={{ width: 488 }}
        >
          {cuisines.map(cuisine => (
            <MenuItem key={cuisine.value} value={cuisine.value}>
              {cuisine.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Cuisine;
