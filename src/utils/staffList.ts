export interface ListType {
  id: number;
  checkbox: boolean;
  name: string;
  job: string;
  salary: number;
}

const initialItems: ListType[] = [
  {
    id: 1,
    checkbox: true,
    name: "Qilichbek",
    job: "Video editor",
    salary: 3.5e2,
  },
  {
    id: 2,
    checkbox: true,
    name: "Komila",
    job: "Grafik designer",
    salary: 4e2,
  },
  { id: 3, checkbox: true, name: "Imona", job: "SEO", salary: 3e2 },
  {
    id: 4,
    checkbox: true,
    name: "Abdulaziz",
    job: "UI designer",
    salary: 4e2,
  },
  { id: 5, checkbox: true, name: "Navruz", job: "Admin", salary: 5e2 },
  {
    id: 6,
    checkbox: true,
    name: "Qilichbek",
    job: "Video editor",
    salary: 3.5e2,
  },
  {
    id: 7,
    checkbox: true,
    name: "Komila",
    job: "Grafik designer",
    salary: 4e2,
  },
  { id: 8, checkbox: true, name: "Imona", job: "SEO", salary: 3e2 },
  {
    id: 9,
    checkbox: true,
    name: "Abdulaziz Abdulaziz",
    job: "UI designer Abdulaziz Abdulaziz",
    salary: 4e2,
  },
  { id: 10, checkbox: true, name: "Navruz", job: "Admin", salary: 5e20 },
];

const table_head = [
  {
    id: 1,
    title: "checkbox",
    element: "checkbox",
  },
  {
    id: 2,
    title: "Ism",
    element: "text",
  },
  {
    id: 3,
    title: "Kasb",
    element: "text",
  },
  {
    id: 4,
    title: "Maosh",
    element: "text",
  },
  {
    id: 5,
    title: "Xodimni o'chirish",
    element: "delete",
  },
];

export { table_head };
export default initialItems;
