import { useState } from 'react';
import { Select, InputLabel, MenuItem, FormControl } from '@mui/material';

const types = [
  { value: 'hot', label: 'Hot' },
  { value: 'cold', label: 'Cold' },
];

function Type({ onTypeChange }) {
  const [selectedType, setSelectedType] = useState('');

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
