import { FC } from "react";
import { Field } from "../../ui/field";
import { Input } from "@chakra-ui/react";

export interface InputPropsType extends React.ComponentProps<typeof Input> {
  value?: string;
  label?: string;
  endText?: string;
  invalid?: boolean;
  errorText?: string;
  className?: string;
  startText?: string;
  helperText?: string;
  contentMask?: string;
  inputplaceHolder?: string;
  autoComplate?: "on" | "off";
  register?: Record<string, any>;
  inputVariant: "outline" | "flushed" | "subtle" | undefined;
}

const GenericInput: FC<InputPropsType> = ({
  invalid,
  register,
  errorText,
  label = "",
  helperText = "",
  required = true,
  autoComplate = "off",
  inputVariant = "outline",
  inputplaceHolder = "Placeholder text",
  ...props
}) => {
  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.value.length > 0) {
  //     invalid = false;
  //     errorText = "";
  //     register = { "": 1 };
  //   }
  // };
  return (
    <Field
      label={label}
      invalid={invalid}
      required={required}
      errorText={errorText}
      helperText={helperText}
      display={label.length > 0 ? "flex" : "none"}
    >
      <Input
        variant={inputVariant}
        // onChange={onChange}
        autoComplete={autoComplate}
        placeholder={inputplaceHolder}
        className="outline-none rounded-md px-[10px] h-[55px] text-[16px] placeholder:text-[16px]"
        {...register}
        {...props}
      />
    </Field>
  );
};

export default GenericInput;
