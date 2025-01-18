import { useEffect, useState } from 'react';
import { TextField, InputLabel } from '@mui/material';

function Name({ onNameChange, recipeName }) {
  const [selectedName, setSelectedName] = useState(recipeName);
  console.log(recipeName);
  console.log(selectedName);

  useEffect(() => {
    setSelectedName(recipeName);
  }, [recipeName]);

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
