import { useState } from 'react';
import {
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from '@mui/material';

const units = [
  { value: 'none', label: 'none' },
  {
    value: 'tsp',
    label: 'teaspoon',
  },
  { value: 'tbsp', label: 'tablespoon' },
  { value: 'cup', label: 'cup' },
  { value: 'floz', label: 'fluid ounce' },
  { value: 'gal', label: 'gallon'}
  { value: 'gram', label: 'gram' },
  { value: 'kg', label: 'kilogram' },
  { value: 'lit', label: 'liter' },
  { value: 'mil', label: 'milliliter' },
  { value: 'oz', label: 'ounce' },
  { value: 'pt', label: 'pint' },
  { value: 'pnd', label: 'pound' },
  { value: 'qt', label: 'quart' },
];


let ingredients = [{ name: '', quantity: '', unit: '' }];

function Ingredient({ onIngredientChange }) {
  const [inputs, setInputs] = useState([{ item: '' }]);
  const [quantity, setQuantity] = useState([{ qty: '' }]);
  const [unit, setUnit] = useState([{ ut: '' }]);
  const [name, setName] = useState([{ nm: '' }]);

  const handleAddInput = index => {
    setInputs([...inputs, { item: '' }]);
    setQuantity([...quantity, { qty: '' }]);
    setUnit([...unit, { ut: '' }]);
    setName([...name, { nm: '' }]);
    ingredients.push({ name: '', quantity: '', unit: '' });
    console.log(ingredients);
  };

  const handleQuantityChange = (e, index) => {
    console.log(e.target.value);

    ingredients[index].quantity = e.target.value;
    setQuantity(prevQty =>
      prevQty.map((qt, i) => {
        if (i === index) {
          return { ...qt, qty: e.target.value };
        } else {
          return qt;
        }
      })
    );
    console.log(quantity);
    onIngredientChange(ingredients);
  };

  const handleUnitChange = (e, index) => {
    console.log(e.target.value);
    const [unit] = units
      .filter(u => u.value === e.target.value)
      .map(u => u.label);
    ingredients[index].unit = unit;
    onIngredientChange(ingredients);
    setUnit(prevUnit =>
      prevUnit.map((unt, i) => {
        if (i === index) {
          return { ...unt, ut: e.target.value };
        } else {
          return unt;
        }
      })
    );
  };

  const handleNameChange = (e, index) => {
    console.log(e);
    ingredients[index].name = e;
    console.log(ingredients[index].name);
    onIngredientChange(ingredients);
    setName(prevName =>
      prevName.map((nam, i) => {
        if (i === index) {
          return { ...nam, nm: e };
        } else {
          return nam;
        }
      })
    );
  };

  return (
    <div>
      {inputs.map((item, index) => (
        <div key={index}>
          <div>
            <div className='select'>
              <div className='subselect'>
              <TextField
                  label='Quantity'
                  value={quantity[index].qty}
                  onChange={e => handleQuantityChange(e, index)}
                  size='small'
                  sx={{ width: 160 }}
                />
              </div>
              <div className='subselect'>
                
                <FormControl>
                  <InputLabel id='select-label2'>Select units</InputLabel>
                  <Select
                    size='small'
                    sx={{ width: 160 }}
                    label='Select units'
                    value={unit[index].ut}
                    onChange={e => handleUnitChange(e, index)}
                  >
                    {units.map(u => (
                      <MenuItem key={u.value} value={u.value}>
                        {u.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className='input-ingredient'>
                <TextField
                  label='Ingredient'
                  value={name[index].nm}
                  onChange={e => handleNameChange(e.target.value, index)}
                  size='small'
                  sx={{ width: 158 }}
                />
              </div>
            </div>
            {index === inputs.length - 1 && (
              <div className='button-ingredient'>
                <Button
                  variant='contained'
                  size='small'
                  onClick={() => handleAddInput(index)}
                >
                  Add ingredient number {index + 2}
                </Button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredient;
