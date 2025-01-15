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
    title: "Fecha de celebración",
    key: "sacraments.date",
    value: "dateFormatted",
  },
  {
    title: "Celebrante",
    key: "minister.name",
    value: "minister.name",
    sortable: false,
  },
  {
    title: "Parroquia",
    key: "parish.name",
    value: "parish.name",
    sortable: false,
  },
  {
    title: "Participantes",
    key: "participants",
    value: "participants",
    sortable: false,
  },
];

export const headersParticipants: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Bautizando",
    key: "fellow",
    value: "fellow",
  },
  {
    title: "Padres",
    key: "fellowParents",
    value: "fellowParents",
  },
  {
    title: "Padrinos",
    key: "godparents",
    value: "godparents",
  },
  {
    title: "Libro",
    key: "bookNumber",
    value: "bookNumber",
  },
  {
    title: "Folio",
    key: "folioNumber",
    value: "folioNumber",
  },
  {
    title: "Acta",
    key: "actNumber",
    value: "actNumber",
  },
  {
    title: "Emisión",
    key: "issueDate",
    value: "issueDate",
  },

  {
    title: "Observación",
    key: "observation",
    value: "observation",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];

export const headersConfirmationParticipants: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Confirmado",
    key: "fellow",
    value: "fellow",
  },
  {
    title: "Padres",
    key: "fellowParents",
    value: "fellowParents",
  },
  {
    title: "Padrinos",
    key: "godparents",
    value: "godparents",
  },
  {
    title: "Libro",
    key: "bookNumber",
    value: "bookNumber",
  },
  {
    title: "Folio",
    key: "folioNumber",
    value: "folioNumber",
  },
  {
    title: "Acta",
    key: "actNumber",
    value: "actNumber",
  },
  {
    title: "Emisión",
    key: "issueDate",
    value: "issueDate",
  },

  {
    title: "Observación",
    key: "observation",
    value: "observation",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];

export const headersMarriageParticipants: DataTableHeaderDTO[] = [
  {
    title: "Op.",
    key: "actions",
    value: "actions",
    fixed: true,
    width: "50px",
    sortable: false,
  },
  {
    title: "Esposo",
    key: "husband",
    value: "husband",
  },
  {
    title: "Esposa",
    key: "wife",
    value: "wife",
  },
  {
    title: "Libro",
    key: "bookNumber",
    value: "bookNumber",
  },
  {
    title: "Folio",
    key: "folioNumber",
    value: "folioNumber",
  },
  {
    title: "Acta",
    key: "actNumber",
    value: "actNumber",
  },
  {
    title: "Emisión",
    key: "issueDate",
    value: "issueDate",
  },

  {
    title: "Anotaciones marginales",
    key: "observation",
    value: "observation",
  },
  {
    title: "Estado",
    key: "status",
    value: "status",
  },
];
