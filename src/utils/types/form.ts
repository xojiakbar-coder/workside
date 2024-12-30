import { z } from "zod";

export type FormValues = z.infer<typeof schema>;

export const schema = z.object({
  firstName: z
    .string()
    .nonempty("Required")
    .regex(
      /^[A-Za-zА-яЁё]{6,50}$/i,
      "Ism faqat harflardan iborat bo'lishi kerak va uzunligi 2-50 oralig'ida bo'lishi kerak"
    ),
  lastName: z
    .string()
    .nonempty("Required")
    .regex(
      /^[A-Za-zА-яЁё]{6,50}$/i,
      "Familiya faqat harflardan iborat bo'lishi kerak va uzunligi 2-50 oralig'ida bo'lishi kerak"
    ),
  email: z
    .string()
    .email("To'g'ri gmail manzilini kiriting")
    .nonempty("Required"),
  phone: z.string().min(1, "Telefon raqami kiritilishi shart"),
  job: z.string().nonempty("Kasbni tanlash shart"),
  gender: z.string().nonempty("Jinsni tanlash shart"),
  city: z.string().nonempty("Shaharni tanlash shart"),
  experience: z.string().nonempty("Tajriba ko'rsatkichini tanlash shart"),
});
