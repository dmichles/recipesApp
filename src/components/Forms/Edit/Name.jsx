import { useEffect, useState } from 'react';
import { TextField, InputLabel } from '@mui/material';

function Name({ onNameChange, recipeName }) {
  const [selectedName, setSelectedName] = useState(recipeName);
  console.log(recipeName);
  console.log(selectedName);

  useEffect(() => {
    setSelectedName(recipeName);
  }, [recipeName]);

  return (
    <div>
      <TextField
        value={selectedName}
        aria-readonly
        size='small'
        sx={{ width: 488 }}
      />
    </div>
  );
}
export default Name;
