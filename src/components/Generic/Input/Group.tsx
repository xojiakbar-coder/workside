import { FC } from "react";
import { Field } from "../../ui/field";
import { InputPropsType } from "./Input";
import { InputGroup } from "../../ui/input-group";
import { Group, Input, Kbd } from "@chakra-ui/react";

const GenericGrupInput: FC<InputPropsType> = ({
  label = "",
  endText = "",
  required = true,
  helperText = "",
  autoComplate = "off",
  inputVariant = "outline",
  inputplaceHolder = "Placeholder text",
}) => {
  return (
    <Field
      label={label}
      required={required}
      helperText={helperText}
      display={label.length > 0 ? "flex" : "none"}
    >
      <Group className="w-full">
        <InputGroup
          flex={1}
          className=""
          endElement={
            <Kbd className="px-[14px] font-mont bg-outer-bdr-color h-full rounded-r-md rounded-l-[0px]">
              {endText}
            </Kbd>
          }
        >
          <Input
            variant={inputVariant}
            autoComplete={autoComplate}
            placeholder={inputplaceHolder}
            className="outline-none rounded-md px-[10px] h-[55px] text-[16px] placeholder:text-[16px]"
          />
        </InputGroup>
      </Group>
    </Field>
  );
};

export default GenericGrupInput;
