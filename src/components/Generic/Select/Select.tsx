import { FC } from "react";
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

interface SelectPropsType {
  label: string;
  required: boolean;
  placeholder: string;
  data: ListCollection<SelectItemType>;
}

const GenericSelect: FC<SelectPropsType> = ({
  data,
  label,
  placeholder,
  required = false,
}) => {
  return (
    <SelectRoot
      variant="subtle"
      collection={data}
      positioning={{ placement: "bottom" }}
    >
      <SelectLabel className="flex items-center gap-[4.2px]">
        {label}
        {required && <Text className="text-[#f87171]">*</Text>}
      </SelectLabel>
      <SelectTrigger className="bg-ghost-bg-color py-[10px] h-[55px] rounded-md">
        <SelectValueText
          placeholder={placeholder}
          className="placeholder:text-danger placeholder:border"
        />
      </SelectTrigger>
      <SelectContent className="flex flex-col gap-[8px] w-full">
        {data.items.map((item) => (
          <SelectItem key={item.id} item={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default GenericSelect;
