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
    title: "Nombre del Esposo",
    key: "nameHusband",
    value: "nameHusband",
  },
  {
    title: "Apellido Paterno",
    key: "paternalSurnameHusband",
    value: "paternalSurnameHusband",
  },
  {
    title: "Apellido Materno",
    key: "maternalSurnameHusband",
    value: "maternalSurnameHusband",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDateHusband",
    value: "birthDateHusband",
  },
  {
    title: "Lugar de Nacimiento",
    key: "birthPlaceHusband",
    value: "birthPlaceHusband",
  },
  {
    title: "Padre",
    key: "fatherHusband",
    value: "fatherHusband",
  },
  {
    title: "Madre",
    key: "motherHusband",
    value: "motherHusband",
  },
  {
    title: "Lugar de Bautizo",
    key: "baptismPlaceHusband",
    value: "baptismPlaceHusband",
  },

  {
    title: "Nombre de la Esposa",
    key: "nameWife",
    value: "nameWife",
  },
  {
    title: "Apellido Paterno",
    key: "paternalSurnameWife",
    value: "paternalSurnameWife",
  },
  {
    title: "Apellido Materno",
    key: "maternalSurnameWife",
    value: "maternalSurnameWife",
  },
  {
    title: "Fecha de Nacimiento",
    key: "birthDateWife",
    value: "birthDateWife",
  },
  {
    title: "Lugar de Nacimiento",
    key: "birthPlaceWife",
    value: "birthPlaceWife",
  },
  {
    title: "Padre",
    key: "fatherWife",
    value: "fatherWife",
  },
  {
    title: "Madre",
    key: "motherWife",
    value: "motherWife",
  },
  {
    title: "Lugar de Bautizo",
    key: "baptismPlaceWife",
    value: "baptismPlaceWife",
  },

  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
