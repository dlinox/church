import { required } from "@/common/utils/ruleUtils";
import { MinisterDTO } from "@/app/modules/ministers/models/Minister.types";
import { ParishDTO } from "@/app/modules/parish/models/Parish.types";

export interface SacramentDTO {
  id: number | null;
  date: string | null;
  type: string;
  description?: string | null;
  parishId?: number | null;
  parish?: ParishDTO | null;
  ministerId?: number | null;
  minister: MinisterDTO | null;
  participants?: [];
  isExternal: boolean;
  status: boolean;
}

export const SacramentRules = {
  date: [required],
  parishId: [required],
  ministerId: [required],
  description: [],
};

export const initSacramentValues = (type: string): SacramentDTO => ({
  id: null,
  date: null,
  type: type,
  description: "",
  minister: null,
  participants: [],
  isExternal: false,
  status: true,
});
