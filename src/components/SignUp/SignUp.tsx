import { FC, useState } from "react";
import { Field } from "../ui/field";
import { NavLink } from "react-router-dom";
import { PasswordInput } from "../ui/password-input";
import { Button, Heading, Input } from "@chakra-ui/react";

const SignUp: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center h-screen bg-sign-in bg-center bg-no-repeat bg-cover min-h-screen w-full px-[30%]">
      <div className="flex flex-col w-full bg-dark-bg-color border-2 border-gray-color py-[50px] justify-between px-[37px] h-max min-h-max rounded-xl gap-[60px]">
        <Heading className="text-center text-white font-grotesk font-semibold text-[32px] mb-[12px]">
          Sign Up
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
            <Field label="Last Name" required helperText="Enter your last name">
              <Input
                placeholder="Last Name"
                autoComplete="off"
                variant={"flushed"}
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
          <div className="flex flex-row gap-[50px]">
            <Field label="Job" required helperText="Enter your job.">
              <Input
                variant={"flushed"}
                autoComplete="off"
                placeholder="Enter your job"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
            <Field
              label="Email"
              required
              helperText="We'll never share your email."
            >
              <Input
                variant={"flushed"}
                autoComplete="off"
                placeholder="Enter your email"
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
                variant={"flushed"}
                placeholder="Enter your password"
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>

            <Field
              label="Confirm Password"
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
            className="h-[55px] font-bold w-[100%] md:text-[20px] sm:text-[16px] text-[14px] border bg-white text-black rounded-xl hover:bg-[#cfcfcf]"
          >
            Submit
          </Button>
          <NavLink
            to={"/signin"}
            className="text-center w-max mx-auto py-[4px] px-[4px] capitalize hover:decoration-blue-600 hover:text-blue-600 text-[20px] underline underline-offset-[3px]"
          >
            sign-in
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
