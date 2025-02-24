import { useEffect, useState } from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@mui/material';

let cuisines = [
  { value: '1', label: 'American' },
  { value: '2', label: 'Armenian' },
  { value: '3', label: 'Austrian' },
  { value: '4', label: 'Belgian' },
  { value: '5', label: 'Bulgarian' },
  { value: '6', label: 'French Classic' },
  { value: '7', label: 'French Corsican' },
  { value: '8', label: 'French Burgundian' },
  { value: '9', label: 'French Lyonnaise' },
  { value: '10', label: 'French Southwest' },
  { value: '11', label: 'English' },
  { value: '12', label: 'Indian' },
  { value: '13', label: 'Iranian' },
  { value: '14', label: 'Italian' },
  { value: '15', label: 'Hungarian' },
  { value: '16', label: 'Georgian' },
  { value: '17', label: 'German' },
  { value: '18', label: 'Greek' },
  { value: '19', label: 'Japanese' },
  { value: '20', label: 'Korean' },
  { value: '21', label: 'Latin American' },
  { value: '22', label: 'Mediterranean' },
  { value: '23', label: 'Middle Eastern' },
  { value: '24', label: 'Persian' },
  { value: '25', label: 'Polish' },
  { value: '26', label: 'Portueguese' },
  { value: '27', label: 'Russian' },
  { value: '28', label: 'Slovenian' },
  { value: '29', label: 'Spanish' },
  { value: '30', label: 'Turkish' },
  { value: '31', label: 'Ukranian' },
  { value: '31', label: 'Uzbek' },
];

function Cuisine({ onCuisineChange, recipeCuisine }) {
  const [selectedCuisine, setSelectedCuisine] = useState('');

  useEffect(() => {
    const [value] = cuisines
      .filter(c => c.label === recipeCuisine)
      .map(c => c.value);
    console.log(value);
    setSelectedCuisine(value);
  }, [recipeCuisine]);

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
