import { FC } from "react";
import { Field } from "../../ui/field";
import { Input } from "@chakra-ui/react";

export interface InputPropsType {
  value?: string;
  label?: string;
  className?: string;
  required?: boolean;
  helperText?: string;
  inputplaceHolder?: string;
  autoComplate?: "on" | "off";
  inputVariant: "outline" | "flushed" | "subtle" | undefined;
}

const GenericInput: FC<InputPropsType> = ({
  label = "",
  required = true,
  helperText = "",
  autoComplate = "off",
  inputVariant = "outline",
  inputplaceHolder = "Placeholder text",
}) => {
  return (
    <Field label={label} required={required} helperText={helperText}>
      <Input
        variant={inputVariant}
        autoComplete={autoComplate}
        placeholder={inputplaceHolder}
        className="outline-none rounded-md px-[10px] h-[55px] text-[16px] placeholder:text-[16px]"
      />
    </Field>
  );
};

export default GenericInput;
