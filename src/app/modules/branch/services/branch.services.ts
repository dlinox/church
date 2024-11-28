import { http } from "@/common/helpers/http";

import { getSessionToken } from "@/common/utils/session";
import { BranchDTO } from "../models/Branch.types";

const baseUrl = import.meta.env.VITE_APP_API_URL + "/branches";

export const _getGeneralInformationBranch = async (): Promise<BranchDTO> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get("/general-information/1");
    return response.data.data;
  } catch (error) {
    return {
      id: null,
      name: "",
      address: "",
      phoneNumber: "",
    };
  }
};
export const _saveItem = async (item: BranchDTO): Promise<boolean> => {
  try {
    const token = getSessionToken() as string;
    await http(token, baseUrl).post("/save", item);
    return true;
  } catch (error) {
    return false;
  }
};

//load-select
export const _loadSelect = async (): Promise<any[]> => {
  try {
    const token = getSessionToken() as string;
    const response = await http(token, baseUrl).get("/load-select");
    return response.data.data;
  } catch (error) {
    return [];
  }
};
