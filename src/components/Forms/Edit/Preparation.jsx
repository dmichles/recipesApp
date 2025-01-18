import { useState } from 'react';
import { Button, TextField } from '@mui/material';

let steps = [{ prepStep: '' }];

function Preparation({ onPreparationChange }) {
  const [inputs, setInputs] = useState([{ item: '' }]);
  const [prepSteps, setPrepSteps] = useState([{ prepStep: '' }]);

  function handlePreparationChange(newStep, index) {
    console.log(steps);
    steps[index] = newStep;
    setPrepSteps(prevSteps =>
      prevSteps.map((step, i) => {
        if (i === index) {
          return { ...step, ...newStep };
        } else {
          return step;
        }
      })
    );
    onPreparationChange(steps);
  }

  function handleAddInput() {
    setInputs([...inputs, { item: '' }]);
    setPrepSteps([...prepSteps, { prepStep: '' }]);
    steps.push({ prepStep: '' });
    console.log(steps);
  }

  return (
    <div>
      {inputs.map((item, index) => (
        <div key={index}>
          <div className='input'>
            <TextField
              size='small'
              multiline
              sx={{ width: 488 }}
              label={`Preparation step ${index + 1}`}
              value={prepSteps[index].prepStep}
              onChange={e =>
                handlePreparationChange({ prepStep: e.target.value }, index)
              }
            />
          </div>
          {index === inputs.length - 1 && (
            <div className='input'>
              <Button
                variant='contained'
                className='button-ingredient'
                size='small'
                onClick={() => handleAddInput()}
              >
                Add step {index + 2}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Preparation;
