import { useEffect, useState } from 'react';
import { TextField, InputLabel } from '@mui/material';

function Name({ onNameChange, recipeName }) {
  const [selectedName, setSelectedName] = useState(recipeName);

  useEffect(() => {
    setSelectedName(recipeName);
  }, [recipeName]);

  const handleNameChange = e => {
    onNameChange(e.target.value);
  };

  return (
    <div>
      <TextField
        value={selectedName}
        onChange={handleNameChange}
        size='small'
        sx={{ width: 488 }}
      />
    </div>
  );
}
export default Name;
