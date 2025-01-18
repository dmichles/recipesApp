import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

function Source({ onSourceChange, recipeSource }) {
  const [selectedSource, setSelectedSource] = useState('');

  useEffect(() => {
    setSelectedSource(recipeSource);
  }, [recipeSource]);

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
