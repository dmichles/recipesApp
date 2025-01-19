import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
  reducerPath: 'recipes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      fetchRecipe: builder.query({
        query: name => {
          return {
            url: '/getRecipe',
            params: { name: name },
            method: 'GET',
          };
        },
      }),
      fetchRecipeNames: builder.query({
        query: () => {
          return {
            url: '/getRecipeNames',
            method: 'GET',
          };
        },
      }),
      fetchCusines: builder.query({
        query: () => {
          return {
            url: '/getCuisines',
            method: 'GET',
          };
        },
      }),
      addRecipe: builder.mutation({
        query: recipe => {
          return {
            url: '/addRecipe',
            body: {
              name: recipe.name,
              category: recipe.category,
              subcategory: recipe.subcategory,
              comments: recipe.comments,
              type: recipe.type,
              cuisine: recipe.cuisine,
              prepMethod: recipe.prepMethod,
              prepSteps: recipe.preparation,
              rating: recipe.rating,
              ingredients: recipe.ingredients,
              servings: recipe.servings,
              source: recipe.source,
              advance: recipe.advance,
            },
            method: 'POST',
          };
        },
      }),
      editRecipe: builder.mutation({
        query: recipe => {
          return {
            url: '/updateRecipe',
            body: {
              name: recipe.name,
              category: recipe.category,
              subcategory: recipe.subcategory,
              comments: recipe.comments,
              type: recipe.type,
              cuisine: recipe.cuisine,
              prepMethod: recipe.prepMethod,
              prepSteps: recipe.prepStep,
              rating: recipe.rating,
              ingredients: recipe.ingredient,
              servings: recipe.servings,
              source: recipe.source,
              advance: recipe.advance,
            },
            method: 'PUT',
          };
        },
      }),
    };
  },
});

export const {
  useFetchRecipeQuery,
  useAddRecipeMutation,
  useEditRecipeMutation,
  useFetchRecipeNamesQuery,
  useFetchCusinesQuery,
} = recipesApi;
export { recipesApi };
