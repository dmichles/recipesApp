import { useEffect, useState } from 'react';
// import Select from 'react-select';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const categories = [
  { value: 'app', label: 'Appetizers' },
  { value: 'sal', label: 'Salads' },
  { value: 'sou', label: 'Soups' },
  { value: 'mai', label: 'Mains' },
  { value: 'sid', label: 'Sides' },
  { value: 'sav', label: 'Savory pies' },
  { value: 'swe', label: 'Sweet pies' },
  { value: 'fil', label: 'Fillings for savory pies' },
  { value: 'coo', label: 'Cookies' },
  { value: 'dou', label: 'Doughs' },
  { value: 'des', label: 'Deserts' },
  { value: 'cak', label: 'Cakes' },
  { value: 'sau', label: 'Sauces' },
  { value: 'veg', label: 'Vegetables' },
];

const subcategories = {
  app: [
    { value: 'mea', label: 'Meat' },
    { value: 'sea', label: 'Seafood' },
    { value: 'veg', label: 'Vegetables' },
    { value: 'oth', label: 'Other' },
  ],
  sal: [
    { value: 'mea', label: 'Meat' },
    { value: 'sea', label: 'Seafood' },
    { value: 'veg', label: 'Vegetables' },
  ],
  sou: [
    { value: 'sto', label: 'Stock base' },
    { value: 'veg', label: 'Vegetable base' },
    { value: 'cre', label: 'Cream/puree' },
    { value: 'thi', label: 'Thick' },
    { value: 'mir', label: 'With mirepoix' },
    { value: 'gaz', label: 'Gazpacho' },
    { value: 'yog', label: 'Yogurt' },
  ],
  mai: [
    { value: 'mea', label: 'Meat' },
    { value: 'fis', label: 'Fish' },
    { value: 'sea', label: 'Seafood' },
    { value: 'pou', label: 'Poultry' },
    { value: 'gam', label: 'Game' },
    { value: 'veg', label: 'Vegetable' },
    { value: 'oth', label: 'Other' },
  ],
  sid: [
    { value: 'veg', label: 'Vegetables' },
    { value: 'ric', label: 'Rice' },
    { value: 'pas', label: 'Pasta' },
    { value: 'pot', label: 'Potatoes' },
    { value: 'oth', label: 'Other' },
  ],
  veg: [
    { value: 'pot', label: 'Potatoes' },
    { value: 'tom', label: 'Tomatoes' },
    { value: 'egg', label: 'Eggplants' },
    { value: 'zuc', label: 'Zucchini' },
    { value: 'cab', label: 'Cabbage' },
    { value: 'del', label: 'Delicata squash' },
    { value: 'but', label: 'Butternut squash' },
  ],
  sav: [{ value: 'non', label: 'None' }],
  swe: [{ value: 'non', label: 'None' }],
  fil: [{ value: 'non', label: 'None' }],
  coo: [{ value: 'non', label: 'None' }],
  dou: [{ value: 'non', label: 'None' }],
  des: [{ value: 'non', label: 'None' }],
  cak: [{ value: 'non', label: 'None' }],
  sau: [{ value: 'non', label: 'None' }],
};

function Category({
  onCategoryChange,
  onSubcategoryChange,
  categoryValue,
  subcategoryValue,
}) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  useEffect(() => {
    const [value] = categories
      .filter(cat => cat.label === categoryValue)
      .map(cat => cat.value);
    setSelectedCategory(value ? value : '');
    const [valueSub] = subcategories[value ? value : 'mai']
      .filter(sub => sub.label === subcategoryValue)
      .map(sub => sub.value);
    setSelectedSubcategory(valueSub ? valueSub : '');
  }, [categoryValue, subcategoryValue]);

  const handleCategoryChange = category => {
    setSelectedCategory(category.target.value);
    setSelectedSubcategory('');
    const [value] = categories
      .filter(obj => obj.value === category.target.value)
      .map(obj => obj.label);

    onCategoryChange(value);
  };

  const handleSubcategoryChange = subcategory => {
    setSelectedSubcategory(subcategory.target.value);
    const [value] = subcategories[selectedCategory]
      .filter(obj => obj.value === subcategory.target.value)
      .map(obj => obj.label);

    onSubcategoryChange(value);
  };

  const subcategoryOptions = selectedCategory
    ? subcategories[selectedCategory]
    : [];

  return (
    <div>
      <div className='select'>
        <FormControl>
          <InputLabel id='select-category-label'>Select category</InputLabel>
          <Select
            id='select-category'
            labelId='select-category-label'
            size='small'
            value={selectedCategory}
            onChange={handleCategoryChange}
            label='Select category'
            sx={{ width: 488 }}
          >
            {categories.map((category, index) => (
              <MenuItem key={index} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className='select'>
        <FormControl>
          <InputLabel id='select-subcategory-label'>
            Select subcategory
          </InputLabel>
          <Select
            labelId='select-subcategory-label'
            value={selectedSubcategory}
            defaultValue='Meat'
            size='small'
            onChange={handleSubcategoryChange}
            label='Select a subcategory'
            sx={{ width: 488 }}
          >
            {subcategoryOptions.map((subcategory, index) => (
              <MenuItem key={index} value={subcategory.value}>
                {subcategory.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Category;
