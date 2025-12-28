import { useState } from 'react';
import { TextField } from '@mui/material';

function Source({ onSourceChange }) {
  const [selectedSource, setSelectedSource] = useState('');

  const handleSourceChange = source => {
    setSelectedSource(source);
    onSourceChange(source);
    console.log(source);
  };

  return (
    <div className='input'>
      <TextField
        size='small'
        sx={{ width: 488 }}
        value={selectedSource}
        onChange={e => handleSourceChange(e.target.value)}
        label='Source'
      />
    </div>
  );
}

export default Source;
