import { http } from "@/common/helpers/http";

import {
  getSessionToken,
  setSessionToken,
  removeSessionToken,
} from "@/common/utils/session";

import { useAuthStore } from "@/app/store/auth.stores";

import { AuthRequestDTO } from "../models";

export const signIn = async (form: AuthRequestDTO): Promise<boolean> => {
  const authStore = useAuthStore();
  try {
    let response = await http().post(`/auth/sign-in`, form);

    console.log(response);
    setSessionToken(response.data.data.token);
    authStore.setAuthState(response.data.data, true);
    return true;
  } catch (error) {
    return false;
  }
};

export const signOut = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken();
    await http(token).post(`/auth/sign-out`, null);
    removeSessionToken();
    authStore.singOut();
    return true;
  } catch (error) {
    return false;
  }
};

export const user = async () => {
  const authStore = useAuthStore();
  try {
    let token = getSessionToken();

    if (!token) {
      removeSessionToken();
      authStore.singOut();
      return;
    }
    let response = await http(token).get(`auth/user`);

    authStore.setAuthState(response.data.data);
    return response.data.data;
  } catch (error: any) {
    return false;
  }
};

export const clearSession = async () => {
  const authStore = useAuthStore();
  localStorage.removeItem("token");
  authStore.clearAuthState();
};
