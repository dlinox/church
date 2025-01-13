import { ItemSelectDTO } from "@/common/models/ItemSelect.types";
import { required } from "@/common/utils/ruleUtils";

export interface PersonDTO {
  id?: number | null;
  documentType: ItemSelectDTO | null;
  documentNumber: string | null;
  name: string | null;
  paternalLastName: string | null;
  maternalLastName: string | null;
  gender: ItemSelectDTO | null;
  birthDate: string | null;
  birthCountry: ItemSelectDTO | null;
  birthLocation: ItemSelectDTO | null;
  birthLocationDetail?: string | null;
}

export const PersonRules = {
  documentType: [],
  documentNumber: [],
  name: [required],
  paternalLastName: [],
  maternalLastName: [],
  gender: [],
  birthDate: [],
  birthCountry: [],
  birthLocation: [],
};

export const PersonStrictRules = {
  documentType: [required],
  documentNumber: [required],
  name: [required],
  paternalLastName: [],
  maternalLastName: [],
  gender: [],
  birthDate: [],
  birthCountry: [],
  birthLocation: [],
};

export const initPersonValues = (): PersonDTO => ({
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
  birthCountry: null,
  birthLocation: null,
  birthLocationDetail: "",
});
