import { Container, GridBox, Input, Title } from "../Generic";

const AddNewEmployee = () => {
  return (
    <Container full type="section">
      <Title type="section">Yangi xodim qo'shish</Title>
      <GridBox cols="1fr 1fr" gap={"20px"}>
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
        <Input
          inputVariant="subtle"
          label="Yangi xodim ismi"
          inputplaceHolder="Ism kiriting"
        />
      </GridBox>
    </Container>
  );
};

export default AddNewEmployee;
