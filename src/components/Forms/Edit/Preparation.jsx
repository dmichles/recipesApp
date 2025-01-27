import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

function Preparation({ onPreparationChange, recipePrepStep }) {
  const [inputs, setInputs] = useState([{ item: '' }]);
  const [prepSteps, setPrepSteps] = useState([{ prepStep: '' }]);
  const [steps, setSteps] = useState(recipePrepStep);

  console.log(recipePrepStep);
  let arr = [];
  for (let i = 0; i < recipePrepStep.length; i++) {
    arr[i] = i;
    // steps[i] = { id: '', prepStep: '' };
  }

  // arr.forEach(i => {
  //   steps[i].id = recipePrepStep[i].id;
  //   steps[i].prepStep = recipePrepStep[i].prepStep;
  // });

  useEffect(() => {
    console.log('here');
    const inp = arr.map(() => {
      return { item: '' };
    });
    const prep = arr.map(i => {
      return { prepStep: recipePrepStep[i].prepStep };
    });
    console.log(prep);
    setInputs(inp);
    setPrepSteps(prep);
  }, [recipePrepStep]);

  function handlePreparationChange(newStep, index) {
    const st = steps.map((item, i) => {
      if (i === index) {
        return { ...item, prepStep: newStep };
      } else {
        return item;
      }
    });
    setSteps(st);

    setPrepSteps(prevSteps =>
      prevSteps.map((step, i) => {
        if (i === index) {
          return { ...step, prepStep: newStep };
        } else {
          return step;
        }
      })
    );
    onPreparationChange(st);
  }

  function handleAddInput() {
    setInputs([...inputs, { item: '' }]);
    setPrepSteps([...prepSteps, { prepStep: '' }]);
    setSteps([...steps, { id: '0', prepStep: '' }]);
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
              onChange={e => handlePreparationChange(e.target.value, index)}
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
