import defaultSelectData, {
  regions,
  geneder,
  experience,
} from "../../utils/data/select";
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
    <Container fluid type="section">
      <Title type="section">Yangi xodim qo'shish</Title>
      <GridBox cols="1fr 1fr" gapX={"30px"} gapY={"38px"}>
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
        <NumberInput
          maxLength={9}
          startText="+998"
          inputVariant="subtle"
          label="Xodim aloqa raqami"
          contentMask="(99) 999-99-99"
          inputplaceHolder="(99) 999-99-99"
        />
        <NumberInput
          maxLength={7}
          required={false}
          inputVariant="subtle"
          inputplaceHolder="ADXXXXXXX"
          label="Xodim Passport ID raqami"
        />
        <Select
          required={true}
          placeholder="Tanlash"
          data={defaultSelectData}
          label="Xodim kasbini tanlang"
        />
        <Select
          data={geneder}
          required={true}
          placeholder="Tanlash"
          label="Jinsni tanlang"
        />
        <Select
          data={regions}
          required={true}
          placeholder="Tanlash"
          label="Regions tanlang"
        />
        <Select
          required={true}
          data={experience}
          placeholder="Tanlash"
          label="Xodimning tajriba ko'rsatkichi"
        />
      </GridBox>
    </Container>
  );
};

export default AddNewEmployee;
