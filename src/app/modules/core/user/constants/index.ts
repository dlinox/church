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
    title: "Correo",
    key: "email",
    value: "email",
  },
  {
    title: "Usuario",
    key: "username",
    value: "username",
  },
  {
    title: "Rol",
    key: "role",
    value: "role.title",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
