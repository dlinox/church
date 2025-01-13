import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/people";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<any>> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );

    return response.data.data as DataTableResponseDTO<any>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: any): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token, baseUrl).post("/save", item);
    return true;
  } catch (error) {
    return false;
  }
};

export const _deleteItem = async (id: number): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token, baseUrl).delete(`/delete/${id}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const _getFamilyRelationships = async (id: number): Promise<any[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(
      `/get-family-relationships/${id}`
    );
    return response.data.data as any[];
  } catch (error) {
    return [];
  }
};

export const _searchSelect = async (search: string): Promise<any[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(`/search-select/${search}`);
    return response.data.data as any[];
  } catch (error) {
    return [];
  }
};

// Route::get('/get-person-by-id/{id}', [PersonController::class, 'getPersonById'])->middleware('auth:sanctum');

export const _getPersonById = async (id: number): Promise<any> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(`/get-person-by-id/${id}`);
    return response.data.data as any;
  } catch (error) {
    return {};
  }
};
