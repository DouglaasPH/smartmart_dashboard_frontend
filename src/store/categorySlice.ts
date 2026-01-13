import type { Category } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Category[] = [
  { id: 1, name: "TVs" },
  { id: 2, name: "Smartphone" },
  { id: 3, name: "Notebooks" },
];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<Category>) {
      state.push(action.payload);
    },
    removeCategory(state, action: PayloadAction<number>) {
      state = state.filter((category) => category.id !== action.payload);
    },

    editCategory(state, action: PayloadAction<Category>) {
      const index = state.findIndex(
        (category) => category.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addCategory, removeCategory } = categorySlice.actions;
export default categorySlice.reducer;
