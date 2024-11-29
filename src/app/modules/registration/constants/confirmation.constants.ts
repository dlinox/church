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
    title: "Nombre",
    key: "name",
    value: "name",
  },
  {
    title: "Apellido Paterno",
    key: "paternalSurname",
    value: "paternalSurname",
  },
  {
    title: "Apellido Materno",
    key: "maternalSurname",
    value: "maternalSurname",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDate",
    value: "birthDate",
  },
  {
    title: "Lugar de Nacimiento",
    key: "birthPlace",
    value: "birthPlace",
  },
  {
    title: "Padre",
    key: "father",
    value: "father",
  },
  {
    title: "Madre",
    key: "mother",
    value: "mother",
  },
  {
    title: "Lugar de Bautizo",
    key: "baptismPlace",
    value: "baptismPlace",
  },

  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
