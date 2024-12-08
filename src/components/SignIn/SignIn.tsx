import { FC, useState } from "react";
import { Field } from "../ui/field";
import { PasswordInput } from "../ui/password-input";
import { Button, Heading, Input } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SignIn: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-sign-in bg-center bg-no-repeat bg-cover min-h-screen w-full px-[30%]">
      <div className="flex flex-col w-full bg-dark-bg-color border-2 border-outer-bdr-color py-[50px] justify-between px-[37px] h-max min-h-max rounded-xl gap-[60px]">
        <Heading className="text-center text-white font-grotesk font-semibold text-[32px] mb-[12px]">
          Signin
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
          <Button
            size="lg"
            className="h-[55px] font-bold w-[100%] md:text-[20px] sm:text-[16px] text-[14px] border bg-white text-black rounded-xl hover:bg-[#9c9c9c]"
          >
            Submit
          </Button>
          <NavLink
            to={"/signup"}
            className="text-center w-max mx-auto py-[4px] px-[4px] capitalize hover:decoration-blue-600 hover:text-blue-600 text-[20px] underline underline-offset-[3px]"
          >
            sign-up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
