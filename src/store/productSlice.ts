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
  {
    id: 3,
    name: "Samsung QN55Q80A",
    description: "55-inch QLED 4K Smart TV with Quantum HDR and Alexa Built-in",
    price: "1399.99",
    category: { id: 1, name: "TVs" },
    brand: "Samsung",
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    description: "6.1-inch OLED display, A16 Bionic chip, 128GB storage",
    price: "1099.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Apple",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    description: "13.4-inch ultrabook with Intel i7, 16GB RAM, 512GB SSD",
    price: "1799.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Dell",
  },
  {
    id: 6,
    name: "Sony Bravia XR A80J",
    description: "55-inch OLED 4K TV with Cognitive Processor XR",
    price: "1599.99",
    category: { id: 1, name: "TVs" },
    brand: "Sony",
  },
  {
    id: 7,
    name: "Samsung Galaxy S23",
    description: "6.1-inch AMOLED display, Snapdragon processor, 256GB storage",
    price: "899.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Samsung",
  },
  {
    id: 8,
    name: "MacBook Air M2",
    description: "13.6-inch laptop with Apple M2 chip and 8GB RAM",
    price: "1199.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Apple",
  },
  {
    id: 9,
    name: "TCL 55C735",
    description: "55-inch QLED 4K Google TV with Dolby Vision",
    price: "799.99",
    category: { id: 1, name: "TVs" },
    brand: "TCL",
  },
  {
    id: 10,
    name: "Xiaomi 13 Pro",
    description: "6.73-inch AMOLED display, Snapdragon 8 Gen 2, 256GB storage",
    price: "999.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Xiaomi",
  },
  {
    id: 11,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "14-inch business laptop with Intel i7 and 16GB RAM",
    price: "1899.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Lenovo",
  },
  {
    id: 12,
    name: "Philips Ambilight 55OLED706",
    description: "55-inch OLED 4K TV with Ambilight and Dolby Atmos",
    price: "1499.99",
    category: { id: 1, name: "TVs" },
    brand: "Philips",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    description: "6.3-inch OLED display, Google Tensor chip, 128GB storage",
    price: "699.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Google",
  },
  {
    id: 14,
    name: "HP Spectre x360",
    description: "14-inch 2-in-1 laptop with Intel i7 and touchscreen",
    price: "1699.99",
    category: { id: 3, name: "Notebooks" },
    brand: "HP",
  },
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
  {
    id: 3,
    name: "Samsung QN55Q80A",
    description: "55-inch QLED 4K Smart TV with Quantum HDR and Alexa Built-in",
    price: "1399.99",
    category: { id: 1, name: "TVs" },
    brand: "Samsung",
  },
  {
    id: 4,
    name: "iPhone 14 Pro",
    description: "6.1-inch OLED display, A16 Bionic chip, 128GB storage",
    price: "1099.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Apple",
  },
  {
    id: 5,
    name: "Dell XPS 13",
    description: "13.4-inch ultrabook with Intel i7, 16GB RAM, 512GB SSD",
    price: "1799.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Dell",
  },
  {
    id: 6,
    name: "Sony Bravia XR A80J",
    description: "55-inch OLED 4K TV with Cognitive Processor XR",
    price: "1599.99",
    category: { id: 1, name: "TVs" },
    brand: "Sony",
  },
  {
    id: 7,
    name: "Samsung Galaxy S23",
    description: "6.1-inch AMOLED display, Snapdragon processor, 256GB storage",
    price: "899.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Samsung",
  },
  {
    id: 8,
    name: "MacBook Air M2",
    description: "13.6-inch laptop with Apple M2 chip and 8GB RAM",
    price: "1199.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Apple",
  },
  {
    id: 9,
    name: "TCL 55C735",
    description: "55-inch QLED 4K Google TV with Dolby Vision",
    price: "799.99",
    category: { id: 1, name: "TVs" },
    brand: "TCL",
  },
  {
    id: 10,
    name: "Xiaomi 13 Pro",
    description: "6.73-inch AMOLED display, Snapdragon 8 Gen 2, 256GB storage",
    price: "999.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Xiaomi",
  },
  {
    id: 11,
    name: "Lenovo ThinkPad X1 Carbon",
    description: "14-inch business laptop with Intel i7 and 16GB RAM",
    price: "1899.99",
    category: { id: 3, name: "Notebooks" },
    brand: "Lenovo",
  },
  {
    id: 12,
    name: "Philips Ambilight 55OLED706",
    description: "55-inch OLED 4K TV with Ambilight and Dolby Atmos",
    price: "1499.99",
    category: { id: 1, name: "TVs" },
    brand: "Philips",
  },
  {
    id: 13,
    name: "Google Pixel 7",
    description: "6.3-inch OLED display, Google Tensor chip, 128GB storage",
    price: "699.99",
    category: { id: 2, name: "Smartphone" },
    brand: "Google",
  },
  {
    id: 14,
    name: "HP Spectre x360",
    description: "14-inch 2-in-1 laptop with Intel i7 and touchscreen",
    price: "1699.99",
    category: { id: 3, name: "Notebooks" },
    brand: "HP",
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
