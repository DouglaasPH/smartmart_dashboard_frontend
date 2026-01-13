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

export const request_to_export_products = async (): Promise<Blob> => {
  const response = await api.get(ROUTES.products.export, {
    responseType: "blob",
  });
  return response.data;
};

export const request_to_import_products = async (
  formData: FormData
): Promise<void> => {
  return await api.post(ROUTES.products.import, formData);
};
