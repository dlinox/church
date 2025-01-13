import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/sacramental-books";

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

// Route::get('/get-book-numbering/{id}', [SacramentBookController::class, 'getBookNumbering'])->middleware('auth:sanctum');

export const _getBookNumbering = async (id: number): Promise<any> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(
      `/get-book-numbering/${id}`
    );
    return response.data.data as string;
  } catch (error) {
    return "";
  }
};
