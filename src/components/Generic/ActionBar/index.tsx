import { FC, Fragment, useEffect, useState } from "react";
import {
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarRoot,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
} from "../../ui/action-bar";

interface ActionBarPropsType {
  open: boolean;
  content: string;
}

const GenericActionBar: FC<ActionBarPropsType> = ({ open, content }) => {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    console.log(isOpen);
  }, [content, isOpen]);

  return (
    <Fragment>
      <ActionBarRoot
        open={isOpen}
        closeOnInteractOutside={false}
        onOpenChange={(e) => setIsOpen(e.open)}
      >
        <ActionBarContent className="bg-gray-color shadow-none px-[20px] h-[65px] min-h-[65px] py-[5px]">
          <ActionBarSelectionTrigger>{content}</ActionBarSelectionTrigger>
          <ActionBarSeparator />
          <ActionBarCloseTrigger />
        </ActionBarContent>
      </ActionBarRoot>
    </Fragment>
  );
};

export default GenericActionBar;
