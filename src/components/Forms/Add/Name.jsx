import { useState } from 'react';
import { TextField, InputLabel } from '@mui/material';

function Name({ onNameChange }) {
  const [selectedName, setSelectedName] = useState('');

  const handleNameChange = name => {
    setSelectedName(name);
    onNameChange(name);
  };

  return (
    <div>
      <TextField
        value={selectedName}
        onChange={e => handleNameChange(e.target.value)}
        label='Recipe name'
        size='small'
        sx={{ width: 488 }}
      />
    </div>
  );
}
export default Name;
