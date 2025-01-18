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
  }

  function onNameChange(name) {
    recipe.name = name;
  }

  function onCommentChange(comment) {
    recipe.comments = comment;
  }

  function onPreparationChange(prep) {
    recipe.preparation = prep;
    console.log(recipe.preparation);
  }

  function onIngredientChange(ingredients) {
    recipe.ingredients = ingredients;
    console.log(recipe);
  }

  const { data, error, isLoading } = useFetchRecipeQuery(recipeName);
  let result = null;
  let editRecipe = {
    name: '',
    category: '',
    subcategory: '',
    type: '',
    cuisine: '',
    prepMethod: '',
    prepSteps: '',
    rating: '',
    ingredient: [{ name: '', quantity: '', unit: '' }],
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
      editRecipe.name = result.name;
      console.log(editRecipe.name);
      editRecipe.category = result.category;
      editRecipe.subcategory = result.subcategory;
      editRecipe.type = result.type;
      editRecipe.cuisine = result.cuisine;
      editRecipe.prepMethod = result.prepMethod;
      editRecipe.comments = result.comments;
      editRecipe.rating = result.rating;
      editRecipe.servings = result.servings;
      editRecipe.source = result.source;
      editRecipe.advance = result.advance;
      editRecipe.comments = result.comments;
      result.ingredients.map((ingredient, index) => {
        editRecipe.ingredient[index] = { name: '', quantity: '', unit: '' };
        editRecipe.ingredient[index].quantity = ingredient.quantity;
        editRecipe.ingredient[index].unit = ingredient.unit;
        editRecipe.ingredient[index].name = ingredient.name;
      });
      result.prepSteps.map((prepStep, index) => {
        editRecipe.prepStep[index] = { name: '' };
        editRecipe.prepStep[index].name = prepStep.prepStep;
      });
    }
  }
  async function sendRecipe() {
    console.log(recipe);
    const result = await updateRecipe(recipe).unwrap();
    console.log(result);
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

    alert(result.message);
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
        recipeName={editRecipe.name}
        key={childKey1}
      />
      <Category
        onCategoryChange={onCategoryChange}
        categoryValue={editRecipe.category}
        onSubcategoryChange={onSubcategoryChange}
        subcategoryValue={editRecipe.subcategory}
        key={childKey2}
      />
      <Type
        onTypeChange={onTypeChange}
        recipeType={editRecipe.type}
        key={childKey3}
      />
      <PrepMethod
        onPrepMethodChange={onPrepMethodChange}
        recipePrepMethod={editRecipe.prepMethod}
        key={childKey4}
      />
      <Cuisine
        onCuisineChange={onCuisineChange}
        recipeCuisine={editRecipe.cuisine}
        key={childKey5}
      />
      <RatingComp
        onRatingChange={onRatingChange}
        recipeRating={editRecipe.rating}
        key={childKey6}
      />
      <Serving
        onServingChange={onServingChange}
        recipeServing={editRecipe.servings}
        key={childKey7}
      />
      <Source
        onSourceChange={onSourceChange}
        recipeSource={editRecipe.source}
        key={childKey8}
      />
      <Advance
        onAdvanceChange={onAdvanceChange}
        recipeAdvance={editRecipe.advance}
        key={childKey9}
      />
      <Comments
        onCommentChange={onCommentChange}
        recipeComments={editRecipe.comments}
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
