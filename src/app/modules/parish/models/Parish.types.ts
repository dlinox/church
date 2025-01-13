import { required } from "@/common/utils/ruleUtils";

export interface ParishDTO {
  id?: number | string;
  name: string | null;
  address?: string | null;
  phoneNumber?: string | null;
  country?: string | null;
  location?: boolean | null;
}

export const ParishRules = {
  name: [required],
  address: [],
  phoneNumber: [],
  country: [],
  location: [],
};

export const initParishValues = (): ParishDTO => ({
  name: "",
});
