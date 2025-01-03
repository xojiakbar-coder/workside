import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "../../utils/types/form";
import defaultSelectData, {
  regions,
  geneder,
  experience,
} from "../../utils/data/select";
import {
  Button,
  Container,
  GridBox,
  GrupInput,
  Input,
  NumberInput,
  Select,
  Title,
} from "../Generic";

const AddNewEmployee = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container fluid type="section">
        <Title type="section">Yangi xodim qo'shish</Title>
        <GridBox cols="1fr 1fr" gapX={"30px"} gapY={"38px"}>
          <Input
            label="Ism"
            inputVariant="subtle"
            invalid={!!errors.firstName}
            register={register("firstName")}
            errorText={errors.firstName?.message}
            inputplaceHolder="Yangi xodim ismini kiriting"
          />
          <Input
            label="Familiya"
            inputVariant="subtle"
            inputplaceHolder="Familiya"
            invalid={!!errors.lastName}
            register={register("lastName")}
            errorText={errors.lastName?.message}
          />
          <GrupInput
            endText="@gmail.com"
            inputVariant="subtle"
            invalid={!!errors.email}
            register={register("email")}
            inputplaceHolder="gmail manzil"
            errorText={errors.email?.message}
            label="Xodimning gmail pochta manzili"
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <NumberInput
                {...field}
                startText="+998"
                inputVariant="subtle"
                invalid={!!errors.phone}
                label="Xodim aloqa raqami"
                contentMask="(99) 999-99-99"
                inputplaceHolder="(99) 999-99-99"
                errorText={errors.phone?.message}
              />
            )}
          />
          <Select
            required={true}
            placeholder="Tanlash"
            invalid={!!errors.job}
            data={defaultSelectData}
            label="Xodim kasbini tanlang"
            errorText={errors.job?.message}
          />
          <Select
            data={geneder}
            required={true}
            placeholder="Tanlash"
            label="Jinsni tanlang"
            invalid={!!errors.gender}
            errorText={errors.gender?.message}
          />
          <Select
            data={regions}
            required={true}
            placeholder="Tanlash"
            label="Shahar tanlang"
            invalid={!!errors.city}
            errorText={errors.city?.message}
          />
          <Select
            required={true}
            data={experience}
            placeholder="Tanlash"
            label="Tajriba ko'rsatkichi"
            invalid={!!errors.experience}
            errorText={errors.experience?.message}
          />
        </GridBox>
        <Button
          type="solid"
          onClick={handleSubmit(onSubmit)}
          className="font-semibold w-max ml-auto mt-auto"
          rightIcon={
            <i className="fa-solid fa-user-plus text-ghost-bg-color"></i>
          }
        >
          Xodimni qo'shish
        </Button>
      </Container>
    </form>
  );
};

export default AddNewEmployee;
