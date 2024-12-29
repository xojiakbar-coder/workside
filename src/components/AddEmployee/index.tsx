import defaultSelectData, { regions, geneder } from "../../utils/data/select";
import {
  Container,
  GridBox,
  GrupInput,
  Input,
  NumberInput,
  Select,
  Title,
} from "../Generic";

const AddNewEmployee = () => {
  return (
    <Container full type="section">
      <Title type="section">Yangi xodim qo'shish</Title>
      <GridBox cols="1fr 1fr" gap={"32px"}>
        <Input
          label="Xodim ismi"
          inputVariant="subtle"
          inputplaceHolder="Yangi xodim ismini kiriting"
        />
        <Input
          label="Familiya"
          inputVariant="subtle"
          inputplaceHolder="Familiya"
        />
        <GrupInput
          endText="@gamil.com"
          inputVariant="subtle"
          inputplaceHolder="example@gmail.com"
          label="Xodimnning email pochta manzili"
        />
        <NumberInput inputVariant="subtle" label="Xodim aloqa raqami" />
        <Select
          required={true}
          data={defaultSelectData}
          placeholder="UI/UX designer"
          label="Xodim kasbini tanlang"
        />
        <Select
          data={geneder}
          required={true}
          placeholder="Erkak"
          label="Jinsni tanlang"
        />
        <Select
          data={regions}
          required={true}
          label="Regions tanlang"
          placeholder="Toshkent"
        />
      </GridBox>
    </Container>
  );
};

export default AddNewEmployee;
