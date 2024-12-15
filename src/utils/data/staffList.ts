export interface ListType {
  id: number;
  name: string;
  job: string;
  salary: number;
}

const initialItems: ListType[] = [
  {
    id: 1,

    name: "Qilichbek",
    job: "Video editor",
    salary: 3.5e2,
  },
  {
    id: 2,

    name: "Komila",
    job: "Grafik designer",
    salary: 4e2,
  },
  { id: 3, name: "Imona", job: "SEO", salary: 3e2 },
  {
    id: 4,

    name: "Abdulaziz",
    job: "UI designer",
    salary: 4e2,
  },
  { id: 5, name: "Navruz", job: "Admin", salary: 5e2 },
  {
    id: 6,

    name: "Qilichbek",
    job: "Video editor",
    salary: 3.5e2,
  },
  {
    id: 7,

    name: "Komila",
    job: "Grafik designer",
    salary: 4e2,
  },
  { id: 8, name: "Imona", job: "SEO", salary: 3e2 },
  {
    id: 9,

    name: "Abdulaziz Abdulaziz",
    job: "UI designer",
    salary: 4e2,
  },
  { id: 10, name: "Navruz", job: "Admin", salary: 5e20 },
];

const table_head = [
  {
    id: 2,
    title: "Ism",
  },
  {
    id: 3,
    title: "Email",
  },
  {
    id: 4,
    title: "Telefon",
  },
];

export { table_head };
export default initialItems;
