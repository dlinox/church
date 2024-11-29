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
    title: "Acta", // 0: pendiente, 1: emitida
    key: "act",
    value: "act",
  },
];

export const demoItems = [
  {
    name: "Juan",
    paternalSurname: "Perez",
    maternalSurname: "Gonzalez",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Pedro",
    paternalSurname: "Lopez",
    maternalSurname: "Garcia",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Maria",
    paternalSurname: "Gonzalez",
    maternalSurname: "Hernandez",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Jose",
    paternalSurname: "Garcia",
    maternalSurname: "Martinez",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Rosa",
    paternalSurname: "Hernandez",
    maternalSurname: "Lopez",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Luis",
    paternalSurname: "Martinez",
    maternalSurname: "Gonzalez",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
  {
    name: "Ana",
    paternalSurname: "Lopez",
    maternalSurname: "Garcia",
    birthDate: "12/12/1990",
    birthPlace: "Mexico",
    father: "Juan Perez",
    mother: "Maria Gonzalez",
    act: false,
  },
];
