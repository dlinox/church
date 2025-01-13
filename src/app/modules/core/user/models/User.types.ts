import { email, required } from "@/common/utils/ruleUtils";
import { ItemSelectDTO } from "@/common/models/ItemSelect.types";

export interface UserDTO {
  id: number | null;
  name: string | null;
  email: string;
  username?: string;
  password?: string | null;
  role?: ItemSelectDTO | null;
  status: boolean;
}

export const UserRules = {
  name: [required],
  email: [required, email],
  username: [required],
  password: [],
  status: [required],
  role: [required],
};

export const initUserValues = (): UserDTO => ({
  id: null,
  name: null,
  email: "",
  password: null,
  username: "",
  role: null,
  status: true,
});
