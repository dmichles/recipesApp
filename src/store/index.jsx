import { configureStore } from '@reduxjs/toolkit';
import { recipesApi } from './apis/recipesApi';

const store = configureStore({
  reducer: {
    recipes: recipesApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(recipesApi.middleware);
  },
});

export default store;
export {
  useFetchRecipeQuery,
  useAddRecipeMutation,
  useEditRecipeMutation,
  useFetchRecipeNamesQuery,
  useFetchCusinesQuery,
} from './apis/recipesApi';
