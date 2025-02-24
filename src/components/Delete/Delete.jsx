import { useState } from 'react';
import { useFetchRecipeNamesQuery } from '../../store';
import FindRecipeByName from './FindRecipeByName';
import SelectRecipe from './SelectRecipe';

function Delete() {
  const [query, setQuery] = useState('');
  const [keyOne, setKeyOne] = useState(0);
  const [keyTwo, setKeyTwo] = useState(1);
  const {
    data: dataOne,
    error: errorOne,
    isLoading: isLoadingOne,
  } = useFetchRecipeNamesQuery(query);

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

  function onChangeName(id) {
    setQuery(id);
  }

  function onChangeSelect(tobedeleted) {
    setKeyOne(prev => prev + 1);
    setKeyTwo(prev => prev + 1);
  }

  return (
    <div>
      <FindRecipeByName key={keyOne} onChangeName={onChangeName} />
      <SelectRecipe
        key={keyTwo}
        onChangeSelect={onChangeSelect}
        recipeNames={recipeNames}
      />
    </div>
  );
}

export default Delete;
