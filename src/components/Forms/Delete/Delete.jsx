import { useState } from 'react';
import {
  useFetchRecipeNamesQuery,
  useFetchRecipeQuery,
  useDeleteRecipeMutation,
} from '../../../store';
import FindRecipeByName from './FindRecipeByName';
import SelectRecipe from './SelectRecipe';
import RecipeCard from './RecipeCard';
import { Button } from '@mui/material';

function Delete() {
  const [recipeValue, setRecipeValue] = useState('');
  const [query, setQuery] = useState('');
  const [keyOne, setKeyOne] = useState(0);
  const [keyTwo, setKeyTwo] = useState(1);
  const {
    data: dataOne,
    error: errorOne,
    isLoading: isLoadingOne,
  } = useFetchRecipeNamesQuery(query);
  const [deleteRecipe, results] = useDeleteRecipeMutation();

  let recipeNames = [];
  if (isLoadingOne) {
    console.log('Loading data');
  } else if (errorOne) {
    console.log('Error loading data');
  } else if (!isLoadingOne) {
    let resultOne = dataOne;
    console.log(resultOne);
    if (resultOne !== null) {
      resultOne.map((item, index) => {
        recipeNames[index] = { value: '', label: '' };
        recipeNames[index].value = item.id;
        recipeNames[index].label = item.name;
        console.log(recipeNames);
      });
    }
  }
  const {
    data: dataTwo,
    error: errorTwo,
    isLoading: isLoadingTwo,
  } = useFetchRecipeQuery(recipeValue);
  let result = null;
  console.log(query);
  let recipe = {
    name: '',
    category: '',
    subcategory: '',
    type: '',
    cuisine: '',
    prepMethod: '',
    prepSteps: '',
    rating: '',
    ingredient: [{ name: '', quantity: 'none', unit: '' }],
    prepStep: [{ name: '' }],
  };

  if (isLoadingTwo) {
    console.log('Loading data');
  } else if (errorTwo) {
    console.log('Error loading data');
  } else if (!isLoadingTwo) {
    result = dataTwo;
    console.log(result);
    if (result !== null) {
      recipe.name = result.name;
      recipe.category = result.category;
      recipe.subcategory = result.subcategory;
      recipe.type = result.type;
      recipe.cuisine = result.cuisine;
      recipe.prepMethod = result.prepMethod;
      recipe.comments = result.comments;
      recipe.rating = result.rating;
      recipe.servings = result.servings;
      recipe.source = result.source;
      recipe.advance = result.advance;
      recipe.comments = result.comments;
      result.ingredients.map((ingredient, index) => {
        recipe.ingredient[index] = { name: '', quantity: '', unit: '' };
        recipe.ingredient[index].quantity = ingredient.quantity;
        recipe.ingredient[index].unit = ingredient.unit;
        recipe.ingredient[index].name = ingredient.name;
      });
      result.prepSteps.map((prepStep, index) => {
        recipe.prepStep[index] = { name: '' };
        recipe.prepStep[index].name = prepStep.prepStep;
      });
    }
  }

  function onChangeName(name) {
    setQuery(name);
  }

  function onChangeSelect(id) {
    console.log(id);
    console.log('deleted');

    setRecipeValue(id);
  }

  function doDelete() {
    deleteRecipe(recipeValue);
    setKeyOne(prev => prev + 1);
    setKeyTwo(prev => prev + 1);
    setQuery('');
    recipe = {};
    setRecipeValue('');
  }

  return (
    <div>
      <FindRecipeByName key={keyOne} onChangeName={onChangeName} />
      <SelectRecipe
        key={keyTwo}
        onChangeSelect={onChangeSelect}
        recipeNames={recipeNames}
      />
      {recipeValue && (
        <Button
          onClick={doDelete}
          variant='contained'
          size='medium'
          className='button-delete'
        >
          Delete recipe
        </Button>
      )}
      {recipeValue && <RecipeCard recipe={recipe} />}
    </div>
  );
}

export default Delete;
