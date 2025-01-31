import { useAddRecipeMutation } from '../../../store';
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
import { Button } from '@mui/material';

let recipe = {};

function AddForm() {
  const [addRecipe, results] = useAddRecipeMutation();
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
  }

  function onIngredientChange(ingredients) {
    recipe.ingredients = ingredients;
    console.log(recipe);
  }

  async function sendRecipe() {
    console.log(recipe);
    const result = await addRecipe(recipe).unwrap();
    console.log(result);

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
      <Name onNameChange={onNameChange} key={childKey1} />
      <Category
        onCategoryChange={onCategoryChange}
        onSubcategoryChange={onSubcategoryChange}
        key={childKey2}
      />
      <Type onTypeChange={onTypeChange} key={childKey3} />
      <PrepMethod onPrepMethodChange={onPrepMethodChange} key={childKey4} />
      <Cuisine onCuisineChange={onCuisineChange} key={childKey5} />
      <RatingComp onRatingChange={onRatingChange} key={childKey6} />
      <Serving onServingChange={onServingChange} key={childKey7} />
      <Source onSourceChange={onSourceChange} key={childKey8} />
      <Advance onAdvanceChange={onAdvanceChange} key={childKey9} />
      <Comments onCommentChange={onCommentChange} key={childKey10} />
      <Ingredient onIngredientChange={onIngredientChange} key={childKey11} />
      <Preparation onPreparationChange={onPreparationChange} key={childKey12} />
      <div className='subcontainer'>
        <Button
          variant='contained'
          size='medium'
          onClick={sendRecipe}
          className='button-ingredient'
        >
          Save Recipe
        </Button>
      </div>
    </div>
  );
}

export default AddForm;
