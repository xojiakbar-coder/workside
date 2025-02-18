import { useForm } from "react-hook-form";
import { Input, Textarea } from "@chakra-ui/react";
import { Button, Container, Title } from "../Generic";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "../../utils/types/form";

const Contact = () => {
  const {
    // control,
    handleSubmit,
    // formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
  };

  return (
    <Container
      fluid
      type="wrapper"
      className="flex flex-col pt-[35px] h-screen"
    >
      <Title type="secondary" className="pb-[60px]">
        Biz sizga aloqaga chiqishimiz <br /> uchun ma'lumotlaringizni qoldiring
      </Title>
      <div className="flex 992:flex-row flex-col items-center gap-[30px] justify-center h-[50vh] pb-[50px] min-h-[50vh] max-h-[50vh]">
        {/* <div className="flex flex-col justify-center items-center w-full h-full">
          <iframe
            width="70%"
            height="70%"
            loading="lazy"
            className="rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47910.947616615405!2d69.29587752187933!3d41.36464970695823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8cb23888afb9%3A0x31c22300affbc36a!2z0K7QvdGD0YHQsNCx0LDQtNGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQotCw0YjQutC10L3RgtGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1736681586140!5m2!1sru!2s"
          ></iframe>
        </div> */}
        <form className="flex flex-col gap-x-[30px] gap-y-[48px] justify-between rounded-md 992:w-[50%] sm:w-[80%] w-full md:p-[40px] py-[30px] px-[20px] h-full bg-transparent border border-border-color">
          <div className="flex flex-col gap-y-[38px]">
            <Input
              variant="subtle"
              placeholder="Telegram username"
              className="flex items-center outline-none rounded-[6px] py-[18px] px-[20px] h-max 992:text-[18px] text-[14px]"
            />

            <Textarea
              size="lg"
              autoresize
              maxLength={236}
              placeholder="Xabaringizni yozib qoldiring"
              className="bg-ghost-bg-color p-[12px] outline-none px-[10px] text-[16px] placeholder:text-[16px] h-max"
            />
          </div>
          <Button
            type="solid"
            onClick={handleSubmit(onSubmit)}
            className="font-semibold w-full mt-auto"
          >
            Yuborish
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
