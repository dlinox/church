import { http } from "@/common/helpers/http";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/select-items";

export const _roleItems = async (): Promise<ItemSelectDTO[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get("/roles");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

export const _booksItems = async (
  type: string,
  search: string
): Promise<ItemSelectDTO[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(`/books/${type}/${search}`);
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
};

export const _parishItems = async (search: string): Promise<ItemSelectDTO[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(`/parishes/${search}`);
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
}

export const _ministersItems = async (): Promise<ItemSelectDTO[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get("/ministers");
    return response.data.data as ItemSelectDTO[];
  } catch (error) {
    return [];
  }
}