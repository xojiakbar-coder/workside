import { FC, useState } from "react";
import { Field } from "../../ui/field";
import { PasswordInput } from "../../ui/password-input";
import { Button, Heading, Input } from "@chakra-ui/react";

const SignIn: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex justify-center items-center h-screen min-h-screen w-full px-[30%]">
      <div className="flex flex-col w-full border border-[#758694] py-[50px] justify-between px-[37px] h-[90vh] min-h-[90vh] rounded-xl gap-[60px]">
        <Heading className="text-center text-white font-mont font-semibold text-[32px] mb-[12px]">
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
            <Field label="Last Name" required helperText="Enter your last name">
              <Input
                placeholder="Last Name"
                autoComplete="off"
                variant={"flushed"}
                className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
              />
            </Field>
          </div>
          <div className="flex flex-row">
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
          <div className="flex flex-row gap-[20px]">
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
        <div className="flex w-full mt-auto justify-center items-center">
          <Button
            size="lg"
            className="h-[55px] font-bold w-[100%] md:text-[20px] sm:text-[16px] text-[14px] border bg-white text-black rounded-xl hover:bg-[#DDDDDD]"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
