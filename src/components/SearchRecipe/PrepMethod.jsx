import { useState } from 'react';
import { Select, InputLabel, FormControl, MenuItem } from '@mui/material';

const prepMethods = [
  { value: 'coo', label: 'Cooked' },
  { value: 'bak', label: 'Baked' },
  { value: 'mix', label: 'Mixed' },
];

function PrepMethod({ onPrepMethodChange }) {
  const [selectedPrepMethod, setSelectedPrepMethod] = useState('');

  const handlePrepMethodChange = prepMethod => {
    setSelectedPrepMethod(prepMethod.target.value);
    const [value] = prepMethods
      .filter(item => item.value === prepMethod.target.value)
      .map(item => item.label);
    onPrepMethodChange(value);
  };

  return (
    <div className='select'>
      <FormControl>
        <InputLabel id='select-label'>Select preparation method</InputLabel>
        <Select
          labelId='select-label'
          value={selectedPrepMethod}
          onChange={handlePrepMethodChange}
          label='Select preparation method'
          size='small'
          sx={{ width: 488 }}
        >
          {prepMethods.map(prepMethod => (
            <MenuItem key={prepMethod.value} value={prepMethod.value}>
              {prepMethod.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default PrepMethod;
