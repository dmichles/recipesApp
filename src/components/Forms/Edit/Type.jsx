import { useEffect, useState } from 'react';
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';

const types = [
  { value: 'hot', label: 'Hot' },
  { value: 'cold', label: 'Cold' },
];

function Type({ onTypeChange, recipeType }) {
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const [value] = types
      .filter(type => type.label === recipeType)
      .map(type => type.value);
    setSelectedType(value);
  }, [recipeType]);

  const handleTypeChange = type => {
    setSelectedType(type.target.value);

    const [value] = types
      .filter(item => item.value === type.target.value)
      .map(item => item.label);

    onTypeChange(value);
  };

  return (
    <div>
      <div className='select'>
        <FormControl>
          <InputLabel id='select-label'>Select dish type</InputLabel>
          <Select
            labelId='select-label'
            value={selectedType}
            onChange={handleTypeChange}
            label='Select dish type'
            sx={{ width: 488 }}
            size='small'
          >
            {types.map(type => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
export default Type;
