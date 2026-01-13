import type { Product } from "@/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Product[] = [
  {
    id: 2,
    name: "LG OLED55C1",
    description:
      "55-inch OLED 4K Smart TV with AI ThinQ and G-Sync compatibility",
    price: "1499.99",
    category: {
      id: 1,
      name: "TVs",
    },
    brand: "LG",
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      state.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      return state.filter((product) => product.id !== action.payload);
    },
    editProduct(state, action: PayloadAction<Product>) {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { addProduct, removeProduct, editProduct } = productSlice.actions;
export default productSlice.reducer;
