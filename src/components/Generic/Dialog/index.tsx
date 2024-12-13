import { FC } from "react";
import { Button } from "@/components/Generic/";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  // DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Text } from "@chakra-ui/react";

interface DialogPropsType {
  title?: string;
  cancelText?: string;
  confirmText?: string;
  description?: string;
  isOpenDialog: boolean;
  makeSureValue: string;
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
        <div className="flex flex-col relative gap-[20px] min-w-[450px] h-max min-h-[300px] py-[22px] px-[20px] bg-ghost-bg-color rounded-md">
          <DialogHeader>
            <DialogCloseTrigger className="absolute top-0 scale-[1.8]" />
            <DialogTitle className="text-[20px] font-mont mt-[12px] font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            <div className="flex items-center gap-[10px]">
              <Checkbox
                size="lg"
                variant="solid"
                value={makeSureValue}
                className="border border-gray-color rounded-sm bg-body-bg-color"
              />
              <Text>{description}</Text>
            </div>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button type="solid">{cancelText || "Bekor qilish"}</Button>
            </DialogActionTrigger>
            <DialogActionTrigger asChild onClick={onConfirm}>
              <Button type="danger">{confirmText || "O'chirish"}</Button>
            </DialogActionTrigger>
          </DialogFooter>
        </div>
      </DialogContent>
    </DialogRoot>
  );
};

export default Dialog;
