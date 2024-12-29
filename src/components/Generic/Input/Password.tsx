import { Field } from "../../ui/field";
import { PasswordInput } from "../../ui/password-input";

const GenericPasswordInput = ({
  value = "",
  label = "",
  required = true,
  helperText = "",
  autoComplate = "off",
  inputplaceHolder = "Placeholder text",
}) => {
  return (
    <Field
      label={label}
      required={required}
      helperText={helperText}
      display={label.length > 0 ? "flex" : "none"}
    >
      <PasswordInput
        value={value}
        // variant={inputVariant}
        autoComplete={autoComplate}
        placeholder={inputplaceHolder}
        className="outline-none border-b border-[#758694] rounded-sm px-[10px] h-[55px] md:text-[20px] sm:text-[16px] text-[14px]"
      />
    </Field>
  );
};

export default GenericPasswordInput;
