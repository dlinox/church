import { required } from "@/common/utils/ruleUtils";

export interface BranchDTO {
  id: number | string | null;
  name: string;
  address: string;
  phoneNumber: string;
}

export const BranchRules = {
  name: [required],
  address: [required],
  phoneNumber: [required],
};
