import moment from "moment";
import { Text } from "@chakra-ui/react";
import SidebarItems from "../Sidebar/Item";
import { LuAlignLeft } from "react-icons/lu";
import {
  // DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";

const SidebarDrawer = () => {
  return (
    <DrawerRoot placement={"start"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <LuAlignLeft className="text-[26px]" />
      </DrawerTrigger>
      <DrawerContent className="bg-body-bg-color border-border-color">
        <DrawerHeader>
          <DrawerTitle className="uppercase text-center font-bold mt-[50px]">
            Workside
          </DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <SidebarItems />
        </DrawerBody>
        <DrawerFooter className="flex justify-center py-[12px]">
          <Text className="text-subtitle-color uppercase">
            &#xa9; 2024 - {moment().year()}
          </Text>
        </DrawerFooter>
        <DrawerCloseTrigger className="scale-125" />
      </DrawerContent>
    </DrawerRoot>
  );
};

export default SidebarDrawer;
