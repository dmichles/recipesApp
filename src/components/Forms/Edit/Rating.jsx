import { useEffect, useState } from 'react';
import { Select, FormControl, MenuItem, InputLabel } from '@mui/material';

const ratings = [
  { value: 'one', label: '1' },
  { value: 'two', label: '2' },
  { value: 'thr', label: '3' },
  { value: 'fou', label: '4' },
  { value: 'fiv', label: '5' },
];

function Rating({ onRatingChange, recipeRating }) {
  const [selectedRating, setSelectedRating] = useState('');

  useEffect(() => {
    const [value] = ratings
      .filter(rtng => rtng.label === recipeRating)
      .map(rtng => rtng.value);
    setSelectedRating(value);
  }, [recipeRating]);

  const handleRatingChange = rating => {
    setSelectedRating(rating.target.value);

    const [value] = ratings
      .filter(item => item.value === rating.target.value)
      .map(item => item.label);
    onRatingChange(value);
  };

  return (
    <div className='select'>
      <FormControl>
        <InputLabel id='select-label'>Select rating</InputLabel>
        <Select
          labelId='select-label'
          value={selectedRating}
          onChange={handleRatingChange}
          label='Select rating'
          size='small'
          sx={{ width: 488 }}
        >
          {ratings.map(rating => (
            <MenuItem key={rating.value} value={rating.value}>
              {rating.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
export default Rating;
