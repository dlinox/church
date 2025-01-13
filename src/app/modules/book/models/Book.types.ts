import { ItemSelectDTO } from "@/common/models/ItemSelect.types";
import { required } from "@/common/utils/ruleUtils";

export interface BookDTO {
  id?: number | string;
  number: number;
  foliosNumber: number;
  yearStart: string | null;
  yearFinish: string | null;
  actsPerFolio: number;
  sacramentType: ItemSelectDTO | null;
}

export const BookRules = {
  number: [required],
  foliosNumber: [required],
  yearStart: [required],
  yearFinish: [],
  actsPerFolio: [required],
  sacramentType: [required],
};

export const initBookValues = (): BookDTO => ({
  number: 0,
  foliosNumber: 0,
  actsPerFolio: 3,
  yearStart: null,
  yearFinish: null,
  sacramentType: {
    value: "1",
    title: "Bautismo",
  },
});
