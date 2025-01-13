import { http } from "@/common/helpers/http";
import {
  DataTableRequestDTO,
  DataTableResponseDTO,
  initValuesDataTableResponse,
} from "@/common/models/DataTable.types";

import { getSessionToken } from "@/common/utils/session";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/sacrament-records";

export const _loadDataTable = async (
  request: DataTableRequestDTO,
  sacramentId: number
): Promise<DataTableResponseDTO<any>> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      "/load-data-table/" + sacramentId,
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
    await http(token, baseUrl).post(`/save`, item);
    return true;
  } catch (error) {
    return false;
  }
};

export const _getRecordById = async (id: number): Promise<any> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get(`/get-record-by-id/${id}`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _invalidateItem = async (request: number): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token, baseUrl).post(`/invalidate`, request);
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

export const _getPrintData = async (request: any): Promise<any> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      `/get-print-data/`,
      request
    );
    return response.data.data;
  } catch (error) {
    return null;
  }
};

export const _printRecord = async (request: any): Promise<any> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).post(
      `/print-record/`,
      request,
      {
        responseType: "blob",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/pdf",
        },
      }
    );

    return response.data;
  } catch (error) {
    return null;
  }
};
