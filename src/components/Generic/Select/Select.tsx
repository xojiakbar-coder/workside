import { FC } from "react";
import { Field } from "../../ui/field";
import { ListCollection, Text } from "@chakra-ui/react";
import { SelectItemType } from "../../../utils/data/select";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../../ui/select";
import { ChangeHandler } from "react-hook-form";

interface SelectPropsType {
  label: string;
  name?: string;
  required: boolean;
  invalid?: boolean;
  errorText?: string;
  placeholder: string;
  onBlur?: ChangeHandler;
  onChange?: ChangeHandler;
  data: ListCollection<SelectItemType>;
}
const GenericSelect: FC<SelectPropsType> = ({
  data,
  label,
  placeholder,
  errorText = "",
  invalid = false,
  required = false,
}) => {
  return (
    <Field
      invalid={invalid}
      errorText={errorText}
      className="flex flex-col gap-[8px] w-full"
    >
      <SelectRoot
        variant="subtle"
        collection={data}
        positioning={{ placement: "bottom" }}
      >
        <SelectLabel className="flex items-center gap-[4.2px]">
          {label}
          {required && <Text className="text-[#f87171]">*</Text>}
        </SelectLabel>
        <SelectTrigger
          className={`bg-ghost-bg-color py-[10px] h-[55px] rounded-md`}
        >
          <SelectValueText placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="flex flex-col gap-[8px] w-full">
          {data.items.map((item) => (
            <SelectItem key={item.id} item={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Field>
  );
};

export default GenericSelect;
