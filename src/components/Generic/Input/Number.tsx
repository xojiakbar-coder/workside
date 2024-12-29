import { FC } from "react";
import { Field } from "../../ui/field";
import { InputPropsType } from "./Input";
import { withMask } from "use-mask-input";
import { Group, Input, InputAddon } from "@chakra-ui/react";

const GenericNumberInput: FC<InputPropsType> = ({
  label = "",
  required = true,
  helperText = "",
  autoComplate = "off",
  inputVariant = "outline",
}) => {
  return (
    <Field
      label={label}
      required={required}
      helperText={helperText}
      display={label.length > 0 ? "flex" : "none"}
    >
      <Group attached className="flex rounded-md h-[55px] w-full">
        <InputAddon className="pl-[12px]">+998</InputAddon>
        <Input
          variant={inputVariant}
          autoComplete={autoComplate}
          placeholder="(99) 999-99-99"
          ref={withMask("(99) 999-99-99")}
          className="text-[16px] placeholder:text-[16px] h-full outline-none px-[10px]"
        />
      </Group>
    </Field>
  );
};

export default GenericNumberInput;
