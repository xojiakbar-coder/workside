import { useState } from "react";
import { Field } from "../ui/field";
import { NavLink } from "react-router-dom";
import { PasswordInput } from "../ui/password-input";
import { Heading, Input } from "@chakra-ui/react";
import { Button } from "../Generic";

const SignIn = () => {
  const [value, setValue] = useState("");

  return (
    <div className="grid lg:grid-cols-[50%_50%] md:grid-cols-1 h-screen min-h-screen w-full">
      <div className="flex flex-col w-full bg-dark-bg-color border-outer-bdr-color py-[50px] justify-between px-[37px] h-screen min-h-screen gap-[60px]">
        <Heading className="text-center text-white font-mont font-semibold text-[32px] mb-[12px]">
          Kirish
        </Heading>
        <div className="flex flex-col w-full justify-start gap-[50px] h-full">
          <div className="flex flex-row gap-[40px]">
            <Field
              label="First Name"
              required
              helperText="Enter your first name"
            >
              <Input
                placeholder="First Name"
                variant={"flushed"}
                autoComplete="off"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
          <div className="flex flex-row gap-[50px]">
            <Field
              label="Password"
              required
              helperText="We'll never share your password."
            >
              <PasswordInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant={"flushed"}
                placeholder="Enter your password"
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
            to={"/signup"}
            className="text-center font-mont w-max mx-auto py-[4px] px-[4px] capitalize hover:decoration-blue-600 hover:text-blue-600 text-[20px] underline underline-offset-[3px]"
          >
            ro'yxatdan o'tish
          </NavLink>
        </div>
      </div>
      <div className="lg:flex w-full hidden bg-sign-in bg-center bg-no-repeat bg-cover h-screen py-[50px] px-[37px] h-screen min-h-screen">
        right background image section
      </div>
    </div>
  );
};

export default SignIn;
