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

interface DialogPropsType {
  isOpenDialog: boolean;
  isCloseDialog: (details: { open: boolean }) => void;
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

const Dialog: FC<DialogPropsType> = ({
  isOpenDialog,
  isCloseDialog,
  title,
  description,
  confirmText,
  cancelText,
  onConfirm,
}) => {
  return (
    <DialogRoot
      open={isOpenDialog}
      onOpenChange={isCloseDialog}
      role="alertdialog"
    >
      <DialogContent className="flex flex-col justify-center items-center h-screen min-h-screen bg-transparent border-none outline-none shadow-none">
        <div className="flex flex-col relative gap-[20px] h-max min-h-[300px] py-[22px] px-[20px] bg-ghost-bg-color rounded-md">
          <DialogHeader>
            <DialogCloseTrigger className="absolute top-0 scale-[1.8]" />
            <DialogTitle className="text-[20px] font-mont mt-[12px] font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>{description}</DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button type="solid">{cancelText || "Cancel"}</Button>
            </DialogActionTrigger>
            <Button type="danger" onClick={onConfirm}>
              {confirmText || "Delete"}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </DialogRoot>
  );
};

export default Dialog;
