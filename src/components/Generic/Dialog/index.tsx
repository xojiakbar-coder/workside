import { Text } from "@chakra-ui/react";
import { Checkbox } from "../../ui/checkbox";
import { FC, Fragment, useState } from "react";
import {
  DialogBody,
  DialogRoot,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogCloseTrigger,
} from "../../ui/dialog";
import { Button } from "..";

interface DialogPropsType {
  title?: string;
  isOpen: boolean;
  cancel?: boolean;
  makeSure?: boolean;
  onClose: () => void;
  description?: string;
  type: "info" | "danger";
}

const Dialog: FC<DialogPropsType> = ({
  type,
  title,
  cancel,
  isOpen,
  onClose,
  makeSure,
  description,
}) => {
  const [makeSureCheckbox, setMakeSureCheckbox] = useState<boolean | null>(
    null
  );

  const handleClose = () => {
    if (makeSure) {
      makeSureCheckbox && onClose();
    } else {
      alert("");
    }
  };

  const getDialogType = (type: "info" | "danger") => {
    switch (type) {
      case "info":
        return "solid";
      case "danger":
        return "danger";
      default:
        return "solid";
    }
  };

  return (
    <Fragment>
      {isOpen && (
        <DialogRoot role="alertdialog" open={isOpen} onOpenChange={onClose}>
          <DialogContent className="flex flex-col justify-center items-center h-screen min-h-screen bg-transparent border-none outline-none shadow-none">
            <div className="flex flex-col relative gap-[20px] min-w-[450px] h-max min-h-[350px] py-[20px] px-[20px] bg-gray-color border border-gray-color rounded-md">
              <DialogHeader className="flex items-start justify-between">
                <DialogCloseTrigger className="scale-150" />
                <DialogTitle className="text-[20px] font-mont w-[90%] font-semibold">
                  {title}
                </DialogTitle>
              </DialogHeader>
              <DialogBody>
                {description && !makeSure && <Text>{description}</Text>}
                {makeSure && (
                  <div className="flex items-start gap-[12px] w-full">
                    <Checkbox
                      size="lg"
                      variant="solid"
                      value={makeSure.valueOf()?.toString()}
                      onChange={() => setMakeSureCheckbox(!makeSureCheckbox)}
                      className="border border-gray-color rounded-sm bg-body-bg-color"
                    />
                    <Text
                      className={`${
                        makeSureCheckbox === null ? "text-light" : "text-danger"
                      }`}
                    >
                      {description}
                    </Text>
                  </div>
                )}
              </DialogBody>
              <DialogFooter>
                {cancel && (
                  <Button type="solid" onClick={onClose}>
                    Bekor qilish
                  </Button>
                )}
                <Button type={getDialogType(type)} onClick={handleClose}>
                  {type === "info" ? "Tushunarli" : "O'chirish"}
                </Button>
              </DialogFooter>
            </div>
          </DialogContent>
        </DialogRoot>
      )}
    </Fragment>
  );
};

export default Dialog;
