import { useFetchRecipeQuery, useFetchRecipeNamesQuery } from '../../store';
import { useState } from 'react';
import SelectRecipe from './SelectRecipe';
import FindRecipeByName from './FindRecipeByName';
import RecipeCard from './RecipeCard';

function Recipe() {
  const [recipeValue, setRecipeValue] = useState('');

  const { data, error, isLoading } = useFetchRecipeQuery(recipeValue);
  let result = null;

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

  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    result = data;
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
  console.log(recipe);
  console.log(recipe.ingredient[0].quantity);

  const onChangeSelect = value => {
    console.log(value);
    setRecipeValue(value);
  };

  const onChangeInput = value => {
    setRecipeValue(value);
  };

  return (
    <div className='recipe'>
      <FindRecipeByName onChange={onChangeInput} />
      <SelectRecipe onChange={onChangeSelect} />
      {result && <RecipeCard recipe={recipe} />}
    </div>
  );
}
export default Recipe;
