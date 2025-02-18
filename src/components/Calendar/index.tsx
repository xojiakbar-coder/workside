import ShowDay from "./ShowDay";
import ShowYear from "./ShowYear";
import ShowWeek from "./ShowWeek";
import ShowMonth from "./ShowMonth";
import { Tabs } from "@chakra-ui/react";
import { Container, Title } from "../Generic";
import { MenuItemType } from "../../utils/types/menu";

const Calendar = () => {
  const langItems: MenuItemType[] = [
    {
      id: 1,
      title: "day",
    },
    {
      id: 2,
      title: "week",
    },
    {
      id: 3,
      title: "month",
    },
    {
      id: 4,
      title: "year",
    },
  ];
  return (
    <Container fluid type="wrapper">
      <Container fluid className="flex flex-col py-[30px] gap-[20px]">
        <Title type="section">Kalendar</Title>
        <Tabs.Root
          variant="enclosed"
          defaultValue="year"
          // orientation="vertical"
          className="flex flex-col justify-center items-center w-full"
        >
          <Tabs.List
            p="1"
            bg="bg.muted"
            className="576:w-[400px] w-[320px] rounded-md"
          >
            {langItems.map((item) => {
              return (
                <Tabs.Trigger
                  className="flex items-center justify-center w-full 576:px-[10px] px-[3px] capitalize 576:text-[16px] text-[14px]"
                  value={item.title}
                  key={item.id}
                >
                  {item.title}
                </Tabs.Trigger>
              );
            })}
            <Tabs.Indicator rounded="l2" />
          </Tabs.List>
          <Tabs.Content value="year" className="mt-[30px]">
            <ShowYear />
          </Tabs.Content>
          <Tabs.Content value="month" className="mt-[30px]">
            <ShowMonth />
          </Tabs.Content>
          <Tabs.Content value="week" className="mt-[30px]">
            <ShowWeek />
          </Tabs.Content>
          <Tabs.Content value="day" className="mt-[30px]">
            <ShowDay />
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </Container>
  );
};

export default Calendar;
