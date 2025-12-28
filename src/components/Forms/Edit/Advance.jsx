import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

function Advance({ onAdvanceChange, recipeAdvance }) {
  const [selectedAdvance, setSelectedAdvance] = useState('');

  useEffect(() => {
    setSelectedAdvance(recipeAdvance);
  }, [recipeAdvance]);

  const handleAdvanceChange = advance => {
    setSelectedAdvance(advance);
    console.log(advance);
    onAdvanceChange(advance);
  };

  return (
    <div className='input'>
      <TextField
        size='small'
        sx={{ width: 488 }}
        value={selectedAdvance}
        onChange={e => handleAdvanceChange(e.target.value)}
        label='How far in advance could be done'
      />
    </div>
  );
}
export default Advance;
