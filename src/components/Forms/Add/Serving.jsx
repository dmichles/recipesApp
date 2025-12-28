import { useState } from 'react';
import { TextField } from '@mui/material';

function Serving({ onServingChange }) {
  const [selectedServing, setSelectedServing] = useState('');

  const handleServingChange = serving => {
    setSelectedServing(serving);
    onServingChange(serving);
  };

  return (
    <div className='input'>
      <TextField
        value={selectedServing}
        onChange={e => handleServingChange(e.target.value)}
        label='Servings'
        size='small'
        sx={{ width: 488 }}
      />
    </div>
  );
}
export default Serving;
