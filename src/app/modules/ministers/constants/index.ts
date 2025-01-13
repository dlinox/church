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
    title: "Núm. de Documento",
    key: "documentNumber",
    value: "documentNumber",
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
  {
    title: "Celular",
    key: "phoneNumber",
    value: "phoneNumber",
  },
  {
    title: "Correo",
    key: "email",
    value: "email",
  },
  {
    title: "Tipo",
    key: "type",
    value: "type.title",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
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
