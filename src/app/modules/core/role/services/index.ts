import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { RoleDTO } from "../models/Role.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/roles";

export const _loadDataTable = async (
  request: DataTableRequestDTO
): Promise<DataTableResponseDTO<RoleDTO>> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table",
      request
    );

    return response.data.data as DataTableResponseDTO<RoleDTO>;
  } catch (error) {
    return initValuesDataTableResponse();
  }
};

export const _saveItem = async (item: RoleDTO): Promise<boolean> => {
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

export const _getAllPermissions = async (): Promise<any[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get("/all-permissions");
    console.log(response.data);
    return response.data.data as any[];
  } catch (error) {
    return [];
  }
};

//asignar permisos
export const _assignPermissions = async (request: any): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token, baseUrl).post(`/assign-permissions/`, request);
    return true;
  } catch (error) {
    return false;
  }
};
