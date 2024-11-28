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
  //documentNumber
  {
    title: "Documento",
    key: "documentNumber",
    value: "documentNumber",
  },
  {
    title: "Nombre",
    key: "name",
    value: "name",
  },
  {
    title: "Apellido Paterno",
    key: "paternalLastName",
    value: "paternalLastName",
  },
  {
    title: "Apellido Materno",
    key: "maternalLastName",
    value: "maternalLastName",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDate",
    value: "birthDate",
  },
  {
    title: "Género",
    key: "gender",
    value: "gender",
  },

  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
