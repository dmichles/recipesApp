import {
  useFetchRecipeQuery,
  useFetchRecipeNamesByParamsQuery,
} from '../../store';
import { useState } from 'react';
import SelectRecipe from './SelectRecipe';
import FindRecipeByName from './FindRecipeByName';
import RecipeCard from './RecipeCard';
import Category from './Category';
import Type from './Type';
import PrepMethod from './PrepMethod';
import Ingredient from './Ingredient';
import Cuisine from './Cuisine';

function Recipe() {
  const [recipeValue, setRecipeValue] = useState('');
  const [query, setQuery] = useState({
    category: '',
    subcategory: '',
    type: '',
    prepMethod: '',
    cuisine: '',
    ingredient: '',
  });

  const {
    data: dataOne,
    error: errorOne,
    isLoading: isLoadingOne,
  } = useFetchRecipeNamesByParamsQuery(query);
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
        recipeNames[index] = { value: '1', label: '' };
        recipeNames[index].value = index.toString();
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
  console.log(recipe);
  console.log(recipe.ingredient[0].quantity);

  const onChangeSelect = value => {
    console.log(value);
    setRecipeValue(value);
  };

  const onChangeName = value => {
    setRecipeValue(value);
  };

  const onCategoryChange = category => {
    setQuery(prev => ({ ...prev, category: category }));
  };

  const onSubcategoryChange = subcategory => {
    setQuery(prev => ({ ...prev, subcategory: subcategory }));
  };

  const onTypeChange = type => {
    setQuery(prev => ({ ...prev, type: type }));
  };

  const onPrepMethodChange = prepMethod => {
    setQuery(prev => ({ ...prev, prepMethod: prepMethod }));
  };

  const onIngredientChange = ingredient => {
    setQuery(prev => ({ ...prev, ingredient: ingredient }));
  };
  const onCuisineChange = cuisine => {
    setQuery(prev => ({ ...prev, cuisine: cuisine }));
  };

  return (
    <div>
      <FindRecipeByName onChange={onChangeName} />
      <Category
        onCategoryChange={onCategoryChange}
        onSubcategoryChange={onSubcategoryChange}
      />
      <Type onTypeChange={onTypeChange} />
      <Cuisine onCuisineChange={onCuisineChange} />
      <PrepMethod onPrepMethodChange={onPrepMethodChange} />
      <Ingredient onIngredientChange={onIngredientChange} />
      <SelectRecipe recipeNames={recipeNames} onChange={onChangeSelect} />
      {result && <RecipeCard recipe={recipe} />}
    </div>
  );
}
export default Recipe;
