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
    title: "Sacramento",
    key: "sacrament_type",
    value: "sacramentType.title",
  },
  {
    title: "Libro",
    key: "number",
    value: "number",
  },
  {
    title: "Núm. de Folios",
    key: "foliosNumber",
    value: "foliosNumber",
  },
  {
    title: "Fecha de Creación",
    key: "yearStart",
    value: "yearStart",
  },
  {
    title: "Fecha de Cierre",
    key: "yearFinish",
    value: "yearFinish",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
    sortable: false,
  },
];

export const sacramentsItems = [
  {
    value: "1",
    title: "Bautismo",
  },
  {
    value: "2",
    title: "Confirmación",
  },
  {
    value: "4",
    title: "Matrimonio",
  },
];
