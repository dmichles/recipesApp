import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

function Comments({ onCommentChange, recipeComments }) {
  const [selectedComment, setSelectedComment] = useState('');

  useEffect(() => {
    setSelectedComment(recipeComments);
  }, [recipeComments]);

  function handleCommentChange(comment) {
    setSelectedComment(comment);
    onCommentChange(comment);
  }

  return (
    <div className='input'>
      <TextField
        size='small'
        sx={{ width: 488 }}
        multiline
        label='Comments'
        value={selectedComment}
        onChange={e => handleCommentChange(e.target.value)}
      />
    </div>
  );
}

export default Comments;
