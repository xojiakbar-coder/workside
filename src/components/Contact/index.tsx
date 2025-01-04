import { useForm } from "react-hook-form";
// import useSize from "../../hooks/useSize";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "../../utils/types/form";
import {
  Button,
  Container,
  GridBox,
  GrupInput,
  Input,
  Title,
} from "../Generic";
import { Textarea } from "@chakra-ui/react";
import { Field } from "../ui/field";

const Contact = () => {
  // const { width } = useSize();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <Container fluid type="section" className="w-full">
      <div className="flex flex-col gap-[40px] items-center h-max min-h-section-h pt-[20px]">
        <Title type="secondary" className="font-mont">
          Bizga ushbu manbalar orqali aloqaga chiqishingiz mumkin
        </Title>
        <GridBox
          cols="1fr"
          gapX="30px"
          gapY="38px"
          className="justify-center w-full lg:px-[25%] md:px-[20%] px-[5%] py-[40px]"
        >
          <Input
            label="Ismingiz"
            inputVariant="subtle"
            invalid={!!errors.firstName}
            register={register("firstName")}
            errorText={errors.firstName?.message}
            inputplaceHolder="Ismingizni kiriting"
          />
          <GrupInput
            endText="@gmail.com"
            inputVariant="subtle"
            invalid={!!errors.email}
            register={register("email")}
            inputplaceHolder="gmail manzilingizni kiriting"
            errorText={errors.email?.message}
            label="Gmail pochta manzil"
          />
          <Field label="Xabaringiz" required>
            <Textarea
              maxLength={590}
              placeholder="Xabaringizni yozib qoldiring"
              className="bg-ghost-bg-color p-[12px] outline-none px-[10px] text-[16px] placeholder:text-[16px] h-[120px]"
            />
          </Field>
          <div className="pt-[10px] w-full">
            <Button
              type="solid"
              className="font-semibold w-full"
              onClick={handleSubmit(onSubmit)}
            >
              Yuborish
            </Button>
          </div>
        </GridBox>
        <div className="flex justify-between w-full py-[100px] lg:px-[25%] md:px-[15%] px-[5%]">
          <iframe
            width="100%"
            height="400"
            loading="lazy"
            style={{ border: "0" }}
            className="shadow-light-shadow rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.1099065125222!2d69.44633727662138!3d41.3934194712991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef189eca30c29%3A0x95727829e4ea1680!2zUWlicmF5LMOVbnFvcsSfb24!5e0!3m2!1sru!2s!4v1733856025520!5m2!1sru!2s"
          ></iframe>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
