import { useState } from 'react';
import { TextField } from '@mui/material';

function Ingredient({ onIngredientChange }) {
  const [input, setInput] = useState('');

  function onChangeInput(e) {
    setInput(e.target.value);
    onIngredientChange(e.target.value);
  }

  return (
    <div className='textfield'>
      <TextField
        id='outlined-input-field'
        value={input}
        onChange={onChangeInput}
        label='Search by ingredient'
        variant='outlined'
        size='small'
        sx={{ width: 488 }}
      />
    </div>
  );
}

export default Ingredient;
