import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuote = createAsyncThunk("quotes/fetchQuote", async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(`Failed to fetch quote: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message || "Network error");
  }
});

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    currentQuote: null,
    favorites: [],
    loading: false,
    error: null,
  },
  reducers: {
    saveQuote: (state) => {
      if (state.currentQuote && !state.favorites.some(q => q._id === state.currentQuote._id)) {
        state.favorites.push(state.currentQuote);
      }
    },
    removeQuote: (state, action) => {
      state.favorites = state.favorites.filter(
        (quote) => quote._id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.loading = false;
        state.currentQuote = action.payload;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { saveQuote, removeQuote } = quoteSlice.actions;
export default quoteSlice.reducer;