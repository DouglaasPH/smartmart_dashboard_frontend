import type { Sale } from "@/types";
import api from "./axios";
import { ROUTES } from "./routes";

export const request_to_list_sale = async (): Promise<Sale[]> => {
  const request = await api.get(ROUTES.sales.list, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return request.data;
};

export const request_to_edit_sale = async (
  sale_id: number,
  sale: Sale
): Promise<Sale> => {
  return await api.put(ROUTES.sales.edit(sale_id), sale, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const request_to_export_sales = async (): Promise<Blob> => {
  const response = await api.get(ROUTES.sales.export, {
    responseType: "blob",
  });
  return response.data;
};
