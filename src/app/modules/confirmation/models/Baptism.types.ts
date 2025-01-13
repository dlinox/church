import { required } from "@/common/utils/ruleUtils";
import { MinisterDTO } from "../../ministers/models/Minister.types";

export interface BaptismDTO {
  id: number | null;
  date: string | null;
  type: string;
  description?: string | null;
  ministerId?: number | null;
  minister: MinisterDTO | null;
  participants?: [];
  status: boolean;
}

export const BaptismRules = {
  date: [required],
  description: [],
  ministerId: [required],
};

export const initBaptismValues = (): BaptismDTO => ({
  id: null,
  date: null,
  type: "2",
  description: "",
  minister: null,
  participants: [],
  status: true,
});
