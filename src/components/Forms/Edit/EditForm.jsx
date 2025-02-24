import {
  useEditRecipeMutation,
  useFetchRecipeQuery,
  useFetchRecipeNamesQuery,
} from '../../../store';
import { useState } from 'react';
import Ingredient from './Ingredient';
import Category from './Category';
import Type from './Type';
import PrepMethod from './PrepMethod';
import Cuisine from './Cuisine';
import Rating from './Rating';
import Serving from './Serving';
import Source from './Source';
import Advance from './Advance';
import Name from './Name';
import Comments from './Comments';
import Preparation from './Preparation';
import {
  Button,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from '@mui/material';
import SelectRecipe from './SelectRecipe';

let recipe = {};
recipe.ingredient = [];
recipe.prepStep = [];
let editRecipe = {};
editRecipe.ingredient = [];
editRecipe.prepStep = [];

function EditForm() {
  const [recipeName, setRecipeName] = useState('');
  const [recipeId, setRecipeId] = useState('');
  const [updateRecipe, results] = useEditRecipeMutation();
  const [keyOne, setKeyOne] = useState(1);
  const [keyTwo, setKeyTwo] = useState(2);
  const [keyThree, setKeyThree] = useState(3);

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
    recipe.prepStep = prep;
  }

  function onIngredientChange(ingredient) {
    recipe.ingredient = ingredient;
  }

  const { data, error, isLoading } = useFetchRecipeQuery(recipeId);
  let result = null;
  // recipe.prepStep[0] = { name: '' };
  // recipe.ingredient[0] = { name: '', quantity: '', unit: '' };
  if (isLoading) {
    console.log('Loading data');
  } else if (error) {
    console.log('Error loading data');
  } else if (!isLoading) {
    result = data;
    // console.log(result);
    if (result !== null) {
      recipe.id = result.id;
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
        recipe.ingredient[index] = {
          id: ingredient.id,
          name: ingredient.name,
          quantity: ingredient.quantity,
          unit: ingredient.unit,
        };
      });
      result.prepSteps.map((prepStep, index) => {
        recipe.prepStep[index] = {
          id: prepStep.id,
          prepStep: prepStep.prepStep,
        };
      });
      editRecipe.ingredient = recipe.ingredient;
      editRecipe.prepStep = recipe.prepStep;
      console.log(recipe);
    }
  }
  function sendRecipe() {
    console.log(recipe);
    updateRecipe(recipe);
    setKeyOne(prev => prev + 1);

    setRecipeName('');
    setRecipeId('');

    recipe.id = '';
    recipe.name = '';
    recipe.category = '';
    recipe.subcategory = '';
    recipe.type = '';
    recipe.cuisine = '';
    recipe.prepMethod = '';
    recipe.comments = '';
    recipe.rating = '';
    recipe.servings = '';
    recipe.source = '';
    recipe.advance = '';
    recipe.comments = '';
    recipe.ingredient = [];
    recipe.prepStep = [];
    editRecipe.ingredient = [];
    editRecipe.prepStep = [];
  }

  const {
    data: dataOne,
    error: errorOne,
    isLoading: isLoadingOne,
  } = useFetchRecipeNamesQuery(recipeName);

  let recipeNames = [];
  if (isLoadingOne) {
    console.log('Loading data');
  } else if (errorOne) {
    console.log('Error loading data');
  } else if (!isLoadingOne) {
    let resultOne = dataOne;
    if (resultOne !== null) {
      resultOne.map((item, index) => {
        recipeNames[index] = { value: '', label: '' };
        recipeNames[index].value = item.id;
        recipeNames[index].label = item.name;
      });
    }
  }

  function onSelectChange(id) {
    setRecipeId(id);
    console.log(id);
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
      <SelectRecipe
        key={keyOne}
        onSelectChange={onSelectChange}
        recipeNames={recipeNames}
      />
      {result && (
        <div>
          <Name onNameChange={onNameChange} recipeName={recipe.name} />
          <Category
            onCategoryChange={onCategoryChange}
            categoryValue={recipe.category}
            onSubcategoryChange={onSubcategoryChange}
            subcategoryValue={recipe.subcategory}
          />
          <Type onTypeChange={onTypeChange} recipeType={recipe.type} />
          <PrepMethod
            onPrepMethodChange={onPrepMethodChange}
            recipePrepMethod={recipe.prepMethod}
          />
          <Cuisine
            onCuisineChange={onCuisineChange}
            recipeCuisine={recipe.cuisine}
          />
          <Rating
            onRatingChange={onRatingChange}
            recipeRating={recipe.rating}
          />
          <Serving
            onServingChange={onServingChange}
            recipeServing={recipe.servings}
          />
          <Source
            onSourceChange={onSourceChange}
            recipeSource={recipe.source}
          />
          <Advance
            onAdvanceChange={onAdvanceChange}
            recipeAdvance={recipe.advance}
          />
          <Comments
            onCommentChange={onCommentChange}
            recipeComments={recipe.comments}
          />
          <Ingredient
            key={keyTwo}
            onIngredientChange={onIngredientChange}
            recipeIngredient={{ data: editRecipe.ingredient }}
          />
          <Preparation
            key={keyThree}
            onPreparationChange={onPreparationChange}
            recipePrepStep={{ data: editRecipe.prepStep }}
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
      )}
    </div>
  );
}

export default EditForm;
