import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCocktail",
  async () => {
    return fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    ).then((res) => res.json());
  }
);

export const fetchSingleCocktail = createAsyncThunk(
  "cocktail/fetchSingleCocktail",
  async ( id ) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    ).then((res) => res.json());
  }
);

export const fetchSearchCocktail = createAsyncThunk(
  "cocktail/fetchSearchCocktail",
  async ( text ) => {
    return fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${text}`
    ).then((res) => res.json());
  }
);

const cocktailSlick = createSlice({
  name: "cocktails",
  initialState: {
    cocktails: [],
    cocktail: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCocktails.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSingleCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSingleCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktail = action.payload.drinks[0];
    },
    [fetchSingleCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchSearchCocktail.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchSearchCocktail.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },
    [fetchSearchCocktail.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlick.reducer;
