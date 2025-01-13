import { required } from "@/common/utils/ruleUtils";

export interface PermissionDTO {
  id: number | null;
  type: string;
  displayName: string | null;
  parentId: number | null;
}

export const PermissionRules = {
  displayName: [required],
  type: [required],
};

export const initPermissionValues = (): PermissionDTO => ({
  id: null,
  type: "",
  displayName: null,
  parentId: null,
});
