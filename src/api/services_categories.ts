import type { Category } from "@/types";
import api from "./axios";
import { ROUTES } from "./routes";

export const request_to_create_category = async (
  name: string
): Promise<Category> => {
  return await api.post(
    ROUTES.categories.add,
    {
      name,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const request_to_list_category = async (): Promise<Category[]> => {
  const request = await api.get(ROUTES.categories.list, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return request.data;
};
