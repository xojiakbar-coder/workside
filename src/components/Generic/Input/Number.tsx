import { FC } from "react";
import { Field } from "../../ui/field";
import { InputPropsType } from "./Input";
import { withMask } from "use-mask-input";
import { Group, Input, InputAddon } from "@chakra-ui/react";

const GenericNumberInput: FC<InputPropsType> = ({
  label = "",
  startText = "",
  errorText = "",
  helperText = "",
  required = true,
  invalid = false,
  contentMask = "",
  autoComplate = "off",
  inputplaceHolder = "",
  inputVariant = "outline",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <Field
        label={label}
        invalid={invalid}
        required={required}
        errorText={errorText}
        helperText={helperText}
        display={label.length > 0 ? "flex" : "none"}
      >
        <Group attached className={`flex rounded-md h-[55px] w-full`}>
          {startText && (
            <InputAddon className="pl-[12px]">{startText}</InputAddon>
          )}
          <Input
            {...props}
            variant={inputVariant}
            autoComplete={autoComplate}
            placeholder={inputplaceHolder}
            ref={(contentMask.length > 0 && withMask(contentMask)) || null}
            className={`text-[16px] placeholder:text-[16px] h-full outline-none px-[10px]`}
          />
        </Group>
      </Field>
    </div>
  );
};

export default GenericNumberInput;
