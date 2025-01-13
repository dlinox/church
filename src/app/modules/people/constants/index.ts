import { DataTableHeaderDTO } from "@/common/models/DataTable.types";

export const headers: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Tipo Doc.",
    key: "documentType",
    value: "documentType.title",
    width: "100px",
  },
  {
    title: "Núm. de Documento",
    key: "documentNumber",
    value: "documentNumber",
    width: "150px",
  },

  {
    title: "Nombre",
    key: "name",
    value: "name",
  },
  {
    title: "Ap. Paterno",
    key: "paternalLastName",
    value: "paternalLastName",
  },
  {
    title: "Ap. Materno",
    key: "maternalLastName",
    value: "maternalLastName",
  },
  {
    title: "Genero",
    key: "gender",
    value: "gender.title",
  },
];

export const typeItems = [
  {
    value: "001",
    title: "Parroco",
  },
  {
    value: "002",
    title: "Vicario",
  },
  {
    value: "003",
    title: "Diácono",
  },
  {
    value: "004",
    title: "Ministro",
  },
  {
    value: "006",
    title: "Sacristán",
  },
  {
    value: "007",
    title: "Secretario",
  },
  {
    value: "008",
    title: "Catequista",
  },
  {
    value: "011",
    title: "Acólito",
  },
  {
    value: "012",
    title: "Monaguillo",
  },
];

export const genderItems = [
  {
    value: "1",
    title: "Masculino",
  },

  {
    value: "2",
    title: "Femenino",
  },
];
