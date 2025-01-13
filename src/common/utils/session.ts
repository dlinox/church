/* @ts-ignore */
import Cookies from "js-cookie";

export const getSessionToken = () => {
  const sessionToken = Cookies.get("LNX.parish") ?? "";
  return sessionToken;
};

export const setSessionToken = (token: string) => {
  Cookies.set("LNX.parish", token, {
    expires: 1,
  });
};

export const removeSessionToken = () => {
  Cookies.remove("LNX.parish");
};
