import { FC } from "react";
import { Button } from "..";
import { Text } from "@chakra-ui/react";
import { Checkbox } from "../../ui/checkbox";
import {
  DialogBody,
  DialogRoot,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogContent,
  DialogCloseTrigger,
  DialogActionTrigger,
} from "../../ui/dialog";

interface DialogPropsType {
  title?: string;
  cancelText?: string;
  confirmText?: string;
  description?: string;
  isOpenDialog: boolean;
  makeSureValue?: string;
  onConfirm?: () => void;
  isCloseDialog: (details: { open: boolean }) => void;
}

const Dialog: FC<DialogPropsType> = ({
  title,
  onConfirm,
  cancelText,
  confirmText,
  description,
  isOpenDialog,
  makeSureValue,
  isCloseDialog,
}) => {
  return (
    <DialogRoot
      open={isOpenDialog}
      onOpenChange={isCloseDialog}
      role="alertdialog"
    >
      <DialogContent className="flex flex-col justify-center items-center h-screen min-h-screen bg-transparent border-none outline-none shadow-none">
        <div className="flex flex-col relative gap-[20px] min-w-[450px] h-max min-h-[300px] py-[20px] px-[20px] bg-gray-color border border-gray-color rounded-md">
          <DialogHeader className="flex items-start justify-between">
            <DialogCloseTrigger className="scale-150" />
            <DialogTitle className="text-[20px] font-mont w-[90%] font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            {description && <Text>{description}</Text>}
            {makeSureValue && (
              <div className="flex items-center gap-[10px]">
                <Checkbox
                  size="lg"
                  variant="solid"
                  value={makeSureValue}
                  className="border border-gray-color rounded-sm bg-body-bg-color"
                />
                <Text>{description}</Text>
              </div>
            )}
          </DialogBody>
          <DialogFooter>
            {cancelText && <Button type="solid">{cancelText}</Button>}
            <DialogActionTrigger asChild onClick={onConfirm}>
              {confirmText && <Button type={"solid"}>{confirmText}</Button>}
            </DialogActionTrigger>
          </DialogFooter>
        </div>
      </DialogContent>
    </DialogRoot>
  );
};

export default Dialog;
