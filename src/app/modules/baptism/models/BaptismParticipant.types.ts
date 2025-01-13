import { required } from "@/common/utils/ruleUtils";

export interface PersonDTO {
  id: number;
  name: string;
  paternalSurname: string | null;
  maternalSurname: string | null;
  birthDate: string | null;
  birthPlace: string | null;
  documentType: string | null;
  documentNumber: string | null;
  gender: number | null;
}

export interface RoleDTO {
  id: number | null;
  role: number;
  personId: number | null;
  personName: string | null;
  family?: RoleDTO[] | [];
}

export interface ParticipantDTO {
  id: number | null;
  bookId: number | null;
  bookNumber: string | null;
  folioNumber: number | null;
  actNumber: number | null;
  roles: RoleDTO[] | [];
  observation: string | null;
  status: boolean;
}

export const BaptismParticipantRules = {
  bookId: [required],
  bookNumber: null,
  folioNumber: [required],
  actNumber: [required],
  roles: [
    {
      role: [required],
      personId: [required],
      personName: [required],
    },
  ],
};

export const initBaptismParticipantValues = (): ParticipantDTO => ({
  id: null,
  bookId: null,
  bookNumber: null,
  folioNumber: null,
  actNumber: null,
  roles: [
    {
      id: null,
      role: 1,
      personId: null,
      personName: "",
      family: [
        {
          id: null,
          role: 1,
          personId: null,
          personName: "",
        },
        {
          id: null,
          role: 2,
          personId: null,
          personName: "",
        },
      ],
    },
    {
      id: null,
      role: 4,
      personId: null,
      personName: "",
    },
    {
      id: null,
      role: 5,
      personId: null,
      personName: "",
    },
  ],
  observation: null,
  status: true,
});
