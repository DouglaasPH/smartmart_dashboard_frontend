import type { Sale } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Sale[] = [];

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {
    addSale(state, action: PayloadAction<Sale>) {
      state.push(action.payload);
    },
    removeSale(state, action: PayloadAction<string>) {
      return state.filter((sale) => sale.month !== action.payload);
    },
    editSale(state, action: PayloadAction<Sale>) {
      const index = state.findIndex(
        (sale) => sale.month === action.payload.month
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addSale, removeSale, editSale } = saleSlice.actions;
export default saleSlice.reducer;
