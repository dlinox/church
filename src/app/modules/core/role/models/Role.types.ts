import { required } from "@/common/utils/ruleUtils";

export interface RoleDTO {
  id: number | null;
  displayName: string | null;
  permissions?: string[];
}

export const RoleRules = {
  displayName: [required],
  permissions: [required],
};

export const initRoleValues = (): RoleDTO => ({
  id: null,
  displayName: null,
  permissions: [],
});
