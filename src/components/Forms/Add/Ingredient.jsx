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
    value: 'teaspoon',
    label: 'teaspoon',
  },
  { value: 'tablespoon', label: 'tablespoon' },
  { value: 'cup', label: 'cup' },
  { value: 'fluid ounce', label: 'fluid ounce' },
  { value: 'gallon', label: 'gallon' },
  { value: 'gram', label: 'gram' },
  { value: 'kilogram', label: 'kilogram' },
  { value: 'liter', label: 'liter' },
  { value: 'milliliter', label: 'milliliter' },
  { value: 'ounce', label: 'ounce' },
  { value: 'pint', label: 'pint' },
  { value: 'pound', label: 'pound' },
  { value: 'quart', label: 'quart' },
  { value: 'piece', label: 'piece' },
  { value: 'package', label: 'package' },
];

let ingredients = [{ name: '', quantity: '', unit: '' }];

function Ingredient({ onIngredientChange }) {
  const [inputs, setInputs] = useState([{ item: '' }]);
  const [quantity, setQuantity] = useState([{ quantity: '' }]);
  const [unit, setUnit] = useState([{ ut: '' }]);
  const [name, setName] = useState([{ name: '' }]);

  const handleAddInput = () => {
    setInputs([...inputs, { item: '' }]);
    setQuantity([...quantity, { quantity: '' }]);
    setUnit([...unit, { ut: '' }]);
    setName([...name, { name: '' }]);
  };

  const handleQuantityChange = (e, index) => {
    console.log(e.target.value);
    ingredients = quantity.map((item, index) => ({
      ...item,
      ...unit[index],
      ...name[index],
    }));
    console.log(ingredients);
    ingredients[index].quantity = e.target.value;
    setQuantity(prevQty =>
      prevQty.map((qt, i) => {
        if (i === index) {
          return { ...qt, quantity: e.target.value };
        } else {
          return qt;
        }
      })
    );
    console.log(quantity);
    onIngredientChange(ingredients);
  };
  console.log(unit);
  const handleUnitChange = (e, index) => {
    console.log(e.target.value);
    console.log(unit);
    ingredients = quantity.map((item, index) => ({
      ...item,
      ...unit[index],
      ...name[index],
    }));
    const [unt] = units
      .filter(u => u.value === e.target.value)
      .map(u => u.label);
    ingredients[index].ut = unt;
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
    ingredients = quantity.map((item, index) => ({
      ...item,
      ...unit[index],
      ...name[index],
    }));
    ingredients[index].name = e;
    console.log(ingredients[index].name);
    onIngredientChange(ingredients);
    setName(prevName =>
      prevName.map((nam, i) => {
        if (i === index) {
          return { ...nam, name: e };
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
              <div className='input-ingredient'>
                <TextField
                  label='Ingredient'
                  value={name[index].name}
                  onChange={e => handleNameChange(e.target.value, index)}
                  size='small'
                  sx={{ width: 158 }}
                />
              </div>
              <div className='subselect'>
                <FormControl>
                  <TextField
                    size='small'
                    select
                    sx={{ width: 160 }}
                    label='Select units'
                    value={unit[index].unit}
                    onChange={e => handleUnitChange(e, index)}
                  >
                    {units.map(u => (
                      <MenuItem key={u.value} value={u.value}>
                        {u.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </div>
              <div className='subselect'>
                <TextField
                  label='Quantity'
                  value={quantity[index].quantity}
                  onChange={e => handleQuantityChange(e, index)}
                  size='small'
                  sx={{ width: 160 }}
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
