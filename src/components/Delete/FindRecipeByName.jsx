import { useState } from 'react';
import { TextField } from '@mui/material';

function FindRecipeByName({ onChangeName }) {
  const [input, setInput] = useState('');

  function onChangeInput(e) {
    console.log(e.target.value);
    setInput(e.target.value);
    onChangeName(e.target.value);
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
        sx={{ width: 488 }}
      />
    </div>
  );
}

export default FindRecipeByName;
