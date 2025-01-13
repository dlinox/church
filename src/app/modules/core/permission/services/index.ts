import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { PermissionDTO } from "../models/Permission.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/permissions";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<PermissionDTO>> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );

    return response.data.data as DataTableResponseDTO<PermissionDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: PermissionDTO): Promise<boolean> => {
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
