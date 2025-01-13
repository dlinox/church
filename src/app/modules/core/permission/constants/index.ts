import { DataTableHeaderDTO } from "@/common/models/DataTable.types";

export const headers: DataTableHeaderDTO[] = [
  {
    title: "Nombre",
    value: "displayName",
    key: "permissions.display_name",
  },
  {
    title: "Clave",
    value: "name",
    key: "permissions.name",
  },
];
