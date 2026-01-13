export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: Category;
}

export interface Sale {
  month: string;
  quantity: number;
  profit: string;
}
