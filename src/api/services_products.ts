import type { Product } from "@/types";
import api from "./axios";
import { ROUTES } from "./routes";

export const request_to_create_product = async (
  name: string,
  description: string,
  brand: string,
  price: number,
  category_id: number
): Promise<Product> => {
  const request = await api.post(
    ROUTES.products.add,
    {
      name: name,
      description: description,
      price: price,
      brand: brand,
      category_id: category_id,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return request.data;
};

export const request_to_list_products = async (): Promise<Product[]> => {
  const request = await api.get(ROUTES.products.list, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return request.data;
};

export const request_to_export_products = async (): Promise<Product[]> => {
  return await api.get(ROUTES.products.export, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const request_to_import_products = async (): Promise<Product[]> => {
  return await api.get(ROUTES.products.import, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
