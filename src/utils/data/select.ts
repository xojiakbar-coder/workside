import { createListCollection } from "@chakra-ui/react";

export interface SelectItemType {
  id: number;
  label: string;
  value: string;
}

export const geneder = createListCollection<SelectItemType>({
  items: [
    { id: 1, label: "Erkak", value: "erkak" },
    { id: 2, label: "Ayol", value: "ayol" },
  ],
});

export const regions = createListCollection<SelectItemType>({
  items: [
    { id: 2, label: "Andijon", value: "andijon" },
    { id: 5, label: "Buxoro", value: "buxoro" },
    { id: 3, label: "Farg'ona", value: "fargona" },
    { id: 6, label: "Jizzax", value: "jizzax" },
    { id: 13, label: "Qoraqalpog'iston", value: "qoraqalpogiston" },
    { id: 9, label: "Qashqadaryo", value: "qashqadaryo" },
    { id: 4, label: "Namangan", value: "namangan" },
    { id: 8, label: "Navoiy", value: "navoiy" },
    { id: 11, label: "Samarqand", value: "samarqand" },
    { id: 12, label: "Sirdaryo", value: "sirdaryo" },
    { id: 10, label: "Surxondaryo", value: "surxondaryo" },
    { id: 1, label: "Toshkent", value: "toshkent" },
    { id: 1, label: "Toshkent viloyati", value: "toshkent-viloyati" },
    { id: 7, label: "Xorazm", value: "xorazm" },
  ],
});

const defaultSelectData = createListCollection<SelectItemType>({
  items: [
    { id: 1, label: "Frontend dasturchi", value: "frontend-dasturchi" },
    { id: 2, label: "Backend dasturchi", value: "backend-dasturchi" },
    { id: 3, label: "Fullstack dasturchi", value: "fullstack-dasturchi" },
    { id: 4, label: "Data engineer", value: "data-engineer" },
    { id: 5, label: "Data scientist", value: "data-scientist" },
    {
      id: 6,
      label: "Cybersecurity mutaxassis",
      value: "cybersecurity-mutaxassis",
    },
    { id: 7, label: "Cloud engineer", value: "cloud-engineer" },
    { id: 8, label: "AI/ML engineer", value: "ai-ml-engineer" },
    { id: 9, label: "DevOps muhandisi", value: "devops-muhandisi" },
    { id: 10, label: "Mobil ilova dasturchi", value: "mobil-ilova-dasturchi" },
    { id: 11, label: "Blockchain dasturchi", value: "blockchain-dasturchi" },
    { id: 12, label: "UI/UX designer", value: "ui-ux-designer" },
    {
      id: 13,
      label: "Robototexnika muhandisi",
      value: "robototexnika-muhandisi",
    },
    { id: 14, label: "IoT mutaxassis", value: "iot-mutaxassis" },
    { id: 15, label: "QA muhandisi", value: "qa-muhandisi" },
    { id: 16, label: "AR/VR mutaxassis", value: "ar-vr-mutaxassis" },
    { id: 17, label: "IT loyihalar menejeri", value: "it-loyihalar-menejeri" },
    {
      id: 18,
      label: "Raqamli marketing mutaxassis",
      value: "raqamli-marketing-mutaxassis",
    },
    { id: 19, label: "E-commerce mutaxassis", value: "e-commerce-mutaxassis" },
    { id: 20, label: "CRM mutaxassis", value: "crm-mutaxassis" },
    { id: 21, label: "Biznes analitik", value: "biznes-analitik" },
    { id: 22, label: "Brend menejer", value: "brend-menejer" },
    { id: 22, label: "Event menejer", value: "event-menejer" },
    { id: 23, label: "Mahsulot menejeri", value: "mahsulot-menejeri" },
    {
      id: 24,
      label: "HR texnologiyalar mutaxassisi",
      value: "hr-texnologiyalar-mutaxassisi",
    },
    { id: 25, label: "FinTech mutaxassis", value: "fintech-mutaxassis" },
    { id: 26, label: "Startup menejeri", value: "startup-menejeri" },
    {
      id: 27,
      label: "Biznes rivojlantirish menejeri",
      value: "biznes-rivojlantirish-menejeri",
    },
    { id: 28, label: "AI etika mutaxassisi", value: "ai-etika-mutaxassisi" },
    {
      id: 29,
      label: "Raqamli transformatsiya menejeri",
      value: "raqamli-transformatsiya-menejeri",
    },
    {
      id: 30,
      label: "Ma'lumotlar vizualizatsiyasi mutaxassisi",
      value: "malumotlar-vizualizatsiyasi-mutaxassisi",
    },
    { id: 31, label: "Game dasturchi", value: "game-dasturchi" },
    { id: 32, label: "Freelance menejeri", value: "freelance-menejeri" },
    {
      id: 33,
      label: "Elektron kontraktlar mutaxassisi",
      value: "elektron-kontraktlar-mutaxassisi",
    },
    {
      id: 34,
      label: "Ovozli yordamchi dasturchi",
      value: "ovozli-yordamchi-dasturchi",
    },
  ],
});

export default defaultSelectData;
