import { useState } from 'react';
import { TextField } from '@mui/material';

function FindRecipeByName({ onChange }) {
  const [input, setInput] = useState('');

  function onChangeInput(e) {
    console.log(e.target.value);
    setInput(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className='textfield'>
      <TextField
        id='outlined-input-field'
        value={input}
        onChange={onChangeInput}
        label='Search recipe by name'
        variant='outlined'
        size='small'
        sx={{ width: 300 }}
      />
    </div>
  );
}

export default FindRecipeByName;
