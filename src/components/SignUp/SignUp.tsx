import { useState } from "react";
import { Field } from "../ui/field";
import { Button } from "../Generic";
import { NavLink } from "react-router-dom";
import { Heading, Input } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";

const SignUp = () => {
  const [value, setValue] = useState("");

  return (
    <div className="grid lg:grid-cols-[50%_50%] md:grid-cols-1 h-screen min-h-screen w-full">
      <div className="flex flex-col w-full bg-dark-bg-color py-[50px] justify-between px-[37px] h-screen min-h-screen gap-[60px]">
        <Heading className="text-center text-white font-mont font-semibold text-[32px] mb-[12px]">
          Ro'yxatdan o'tish
        </Heading>
        <div className="flex flex-col w-full justify-start gap-[50px] h-full">
          <div className="flex flex-row gap-[40px]">
            <Field label="Ismingiz" required helperText="Ismingizni kiriting">
              <Input
                variant="flushed"
                autoComplete="off"
                placeholder="Azizbek"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
            <Field
              required
              label="Familyangiz"
              helperText="Familyangizni kiriting"
            >
              <Input
                variant="flushed"
                autoComplete="off"
                placeholder="Ahmedov"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
          <div className="flex flex-row gap-[50px]">
            <Field label="Kasbingiz" required helperText="Kasbingizni kiriting">
              <Input
                variant="flushed"
                autoComplete="off"
                placeholder="Grafik dizayner"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
            <Field
              required
              label="Email"
              helperText="Email manzilingizni kiriting"
            >
              <Input
                variant="flushed"
                autoComplete="off"
                placeholder="eshmat@gmail.com"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
          <div className="flex flex-row gap-[50px]">
            <Field
              required
              label="Parollingiz"
              helperText="Parollingizni kiriting"
            >
              <PasswordInput
                variant="flushed"
                placeholder="toshmatpromax-77"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>

            <Field
              required
              label="Paroll tasdiqlash"
              helperText="Parollingizni tasdiqlang"
            >
              <PasswordInput
                value={value}
                variant="flushed"
                placeholder="Parollingizni tasdiqlang"
                onChange={(e) => setValue(e.target.value)}
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full mt-auto justify-center items-center">
          <Button type="solid" className="w-full font-semibold">
            Yuborish
          </Button>
          <NavLink
            to={"/signin"}
            className="text-center font-mont w-max mx-auto py-[4px] px-[4px] capitalize hover:decoration-blue-600 hover:text-blue-600 text-[20px] underline underline-offset-[3px]"
          >
            Kirish
          </NavLink>
        </div>
      </div>
      <div className="lg:flex w-full hidden bg-sign-in bg-center bg-no-repeat bg-cover h-screen py-[50px] px-[37px] h-screen min-h-screen">
        right background image section
      </div>
    </div>
  );
};

export default SignUp;
