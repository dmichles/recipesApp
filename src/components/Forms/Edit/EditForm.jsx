import { useState } from 'react';
import { TextField } from '@mui/material';

const text = 'Under development';
function EditForm() {
  const [input, setInput] = useState(text);
  return (
    <div>
      <TextField multiline label='input' value={input} />
    </div>
  );
}

export default EditForm;
