import { useEditRecipeMutation, useFetchRecipeQuery } from '../../../store';
import { useState } from 'react';
import Ingredient from './Ingredient';
import Category from './Category';
import Type from './Type';
import PrepMethod from './PrepMethod';
import Cuisine from './Cuisine';
import RatingComp from './Rating';
import Serving from './Serving';
import Source from './Source';
import Advance from './Advance';
import Name from './Name';
import Comments from './Comments';
import Preparation from './Preparation';
import { Button, TextField } from '@mui/material';

let recipe = {};
recipe.ingredient = [];
recipe.prepStep = [];
let editRecipe = {};
editRecipe.ingredient = [];
editRecipe.prepStep = [];

function EditForm() {
  const [recipeName, setRecipeName] = useState('');
  const [updateRecipe, results] = useEditRecipeMutation();

  const [childKey1, setChildKey1] = useState(0);
  const [childKey2, setChildKey2] = useState(1);
  const [childKey3, setChildKey3] = useState(2);
  const [childKey4, setChildKey4] = useState(3);
  const [childKey5, setChildKey5] = useState(4);
  const [childKey6, setChildKey6] = useState(5);
  const [childKey7, setChildKey7] = useState(6);
  const [childKey8, setChildKey8] = useState(7);
  const [childKey9, setChildKey9] = useState(8);
  const [childKey10, setChildKey10] = useState(9);
  const [childKey11, setChildKey11] = useState(10);
  const [childKey12, setChildKey12] = useState(11);

  function onCategoryChange(category) {
    recipe.category = category;
  }

  function onSubcategoryChange(subcategory) {
    recipe.subcategory = subcategory;
  }

  function onTypeChange(type) {
    recipe.type = type;
  }

  function onPrepMethodChange(prepMethod) {
    recipe.prepMethod = prepMethod;
  }

  function onCuisineChange(cuisine) {
    recipe.cuisine = cuisine;
  }

  function onRatingChange(rating) {
    recipe.rating = rating;
  }

  function onServingChange(serving) {
    recipe.servings = serving;
  }

  function onSourceChange(source) {
    recipe.source = source;
  }

  function onAdvanceChange(advance) {
    recipe.advance = advance;
    console.log(recipe.advance);
  }

  function onNameChange(name) {
    recipe.name = name;
  }

  function onCommentChange(comment) {
    recipe.comments = comment;
  }

  function onPreparationChange(prep) {
    recipe.prepStep = prep;
    console.log(recipe.prepStep);
  }

  function onIngredientChange(ingredient) {
    recipe.ingredient = ingredient;
    console.log(recipe);
  }

  const { data, error, isLoading } = useFetchRecipeQuery(recipeName);
  let result = null;
  recipe.prepStep[0] = { name: '' };
  recipe.ingredient[0] = { name: '', quantity: '', unit: '' };
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
      recipe.advance = result.advance;
      recipe.comments = result.comments;
      result.ingredients.map((ingredient, index) => {
        recipe.ingredient[index] = { name: '', quantity: '', unit: '' };
        recipe.ingredient[index].quantity = ingredient.quantity;
        recipe.ingredient[index].unit = ingredient.unit;
        recipe.ingredient[index].name = ingredient.name;
      });
      result.prepSteps.map((prepStep, index) => {
        recipe.prepStep[index] = { name: prepStep.prepStep };
      });
      editRecipe.ingredient = recipe.ingredient;
      editRecipe.prepStep = recipe.prepStep;
    }
  }
  async function sendRecipe() {
    console.log(recipe);
    // const result = await updateRecipe(recipe).unwrap();
    // console.log(result);
    setRecipeName('');

    setChildKey1(prevKey => prevKey + 1);
    setChildKey2(prevKey => prevKey + 1);
    setChildKey3(prevKey => prevKey + 1);
    setChildKey4(prevKey => prevKey + 1);
    setChildKey5(prevKey => prevKey + 1);
    setChildKey6(prevKey => prevKey + 1);
    setChildKey7(prevKey => prevKey + 1);
    setChildKey8(prevKey => prevKey + 1);
    setChildKey9(prevKey => prevKey + 1);
    setChildKey10(prevKey => prevKey + 1);
    setChildKey11(prevKey => prevKey + 1);
    setChildKey12(prevKey => prevKey + 1);

    // alert(result.message);
  }

  return (
    <div className='container'>
      <div className='textfield'>
        <TextField
          label='Search recipe by name'
          size='small'
          sx={{ width: 488 }}
          value={recipeName}
          onChange={e => setRecipeName(e.target.value)}
        />
      </div>
      <Name
        onNameChange={onNameChange}
        recipeName={recipe.name}
        key={childKey1}
      />
      <Category
        onCategoryChange={onCategoryChange}
        categoryValue={recipe.category}
        onSubcategoryChange={onSubcategoryChange}
        subcategoryValue={recipe.subcategory}
        key={childKey2}
      />
      <Type
        onTypeChange={onTypeChange}
        recipeType={recipe.type}
        key={childKey3}
      />
      <PrepMethod
        onPrepMethodChange={onPrepMethodChange}
        recipePrepMethod={recipe.prepMethod}
        key={childKey4}
      />
      <Cuisine
        onCuisineChange={onCuisineChange}
        recipeCuisine={recipe.cuisine}
        key={childKey5}
      />
      <RatingComp
        onRatingChange={onRatingChange}
        recipeRating={recipe.rating}
        key={childKey6}
      />
      <Serving
        onServingChange={onServingChange}
        recipeServing={recipe.servings}
        key={childKey7}
      />
      <Source
        onSourceChange={onSourceChange}
        recipeSource={recipe.source}
        key={childKey8}
      />
      <Advance
        onAdvanceChange={onAdvanceChange}
        recipeAdvance={recipe.advance}
        key={childKey9}
      />
      <Comments
        onCommentChange={onCommentChange}
        recipeComments={recipe.comments}
        key={childKey10}
      />
      <Ingredient
        onIngredientChange={onIngredientChange}
        recipeIngredient={editRecipe.ingredient}
        key={childKey11}
      />
      <Preparation
        onPreparationChange={onPreparationChange}
        recipePrepStep={editRecipe.prepStep}
        key={childKey12}
      />
      <div className='subcontainer'>
        <Button
          variant='contained'
          size='medium'
          onClick={sendRecipe}
          className='button-ingredient'
        >
          Submit Recipe
        </Button>
      </div>
    </div>
  );
}

export default EditForm;
