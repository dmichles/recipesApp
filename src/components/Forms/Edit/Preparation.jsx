import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

let steps = [];

function Preparation({ onPreparationChange, recipePrepStep }) {
  const [inputs, setInputs] = useState([{ item: '' }]);
  const [prepSteps, setPrepSteps] = useState([{ prepStep: '' }]);

  console.log(recipePrepStep);
  let arr = [];
  for (let i = 0; i < recipePrepStep.length; i++) {
    arr[i] = i;
    steps[i] = { prepStep: '' };
  }

  arr.forEach(i => {
    steps[i].prepStep = recipePrepStep[i].name;
    console.log(steps[i].prepStep);
  });

  useEffect(() => {
    console.log('here');
    const inp = arr.map(() => {
      return { item: '' };
    });
    const prep = arr.map(i => {
      return { prepStep: recipePrepStep[i].name };
    });
    console.log(prep);
    setInputs(inp);
    setPrepSteps(prep);
  }, [recipePrepStep]);

  function handlePreparationChange(newStep, index) {
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
