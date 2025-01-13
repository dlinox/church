import { ItemSelectDTO } from "@/common/models/ItemSelect.types";
import { dni, email, required } from "@/common/utils/ruleUtils";

export interface PersonDTO {
  documentType: ItemSelectDTO | null;
  documentNumber: string | null;
  name: string | null;
  paternalLastName: string | null;
  maternalLastName: string | null;
  gender?: ItemSelectDTO | null;
  birthDate?: string | null;
  birthCountry?: string | null;
  birthLocation?: string | null;
  birthLocationDetail?: string | null;
}

export interface MinisterDTO extends PersonDTO {
  id?: number | string;
  phoneNumber: string | null;
  email: string | null;
  type: ItemSelectDTO | null;
  status: boolean | null;
}

export const MinisterRules = {
  phoneNumber: [],
  email: [email],
  type: [required],
  status: [],
  documentNumber: [required, dni],
  name: [required],
  paternalLastName: [],
  maternalLastName: [],
  gender: [],
  birthDate: [],
};

export const initMinisterValues = (): MinisterDTO => ({
  phoneNumber: null,
  email: null,
  type: null,
  status: true,
  documentType: {
    value: "01",
    title: "DNI",
  },
  documentNumber: null,
  name: null,
  paternalLastName: null,
  maternalLastName: null,
  gender: null,
  birthDate: null,
});
