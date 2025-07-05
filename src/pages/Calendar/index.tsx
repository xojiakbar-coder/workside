import ShowDay from "./ShowDay";
import ShowYear from "./ShowYear";
import ShowWeek from "./ShowWeek";
import ShowMonth from "./ShowMonth";
import { Container, Tabs, Title } from "../Generic";

const Calendar = () => {
  const calendar_items = [
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

  const tabs_content_items = [
    {
      id: 1,
      value: "day",
      element: ShowDay,
    },
    {
      id: 2,
      value: "week",
      element: ShowWeek,
    },
    {
      id: 3,
      value: "month",
      element: ShowMonth,
    },
    {
      id: 3,
      value: "year",
      element: ShowYear,
    },
  ];

  return (
    <Container fluid type="wrapper">
      <Container fluid className="flex flex-col py-[30px] gap-[20px]">
        <Title type="section">Kalendar</Title>
        <Tabs
          defaultValue="year"
          menu_items={calendar_items}
          content={tabs_content_items}
        />
      </Container>
    </Container>
  );
};

export default Calendar;
