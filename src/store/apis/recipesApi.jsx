import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipesApi = createApi({
  reducerPath: 'recipes',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
  }),
  endpoints(builder) {
    return {
      fetchRecipe: builder.query({
        providesTags: ['recipe'],
        query: id => {
          return {
            url: '/getRecipe',
            params: { id: id },
            method: 'GET',
          };
        },
      }),
      fetchRecipeNamesByParams: builder.query({
        query: query => {
          return {
            url: '/getRecipeNamesByParams',
            params: {
              category: query.category,
              subcategory: query.subcategory,
              type: query.type,
              prepMethod: query.prepMethod,
              cuisine: query.cuisine,
              ingredient: query.ingredient,
            },
            method: 'GET',
          };
        },
      }),
      fetchRecipeNames: builder.query({
        providesTags: ['rec'],
        query: name => {
          return {
            url: '/getRecipeNames',
            params: {
              name: name,
            },
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
              imageUrl: recipe.imageUrl,
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
      deleteRecipe: builder.mutation({
        invalidatesTags: ['rec'],
        query: id => {
          return {
            url: '/deleteRecipe',
            params: { id: id },
            method: 'DELETE',
          };
        },
      }),
      editRecipe: builder.mutation({
        invalidatesTags: ['recipe'],
        query: recipe => {
          return {
            url: '/updateRecipe',
            body: {
              id: recipe.id,
              imageUrl: recipe.imageUrl,
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
  useDeleteRecipeMutation,
  useFetchRecipeNamesByParamsQuery,
  useFetchRecipeNamesQuery,
  useFetchCusinesQuery,
} = recipesApi;
export { recipesApi };
