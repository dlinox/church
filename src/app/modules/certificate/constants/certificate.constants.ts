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
    title: "Tipo",
    key: "type",
    value: "type",
  },
  {
    title: "Nombres",
    key: "name",
    value: "name",
  },
  // fecha de realización
  {
    title: "Fecha de realización",
    key: "date",
    value: "date",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
