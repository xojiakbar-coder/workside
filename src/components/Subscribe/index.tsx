import SmallTeams from "./SmallTeams";
import Enterprises from "./Enterprises";
import { Container, Tabs, Title } from "../Generic";

const Subscribe = () => {
  const menu_items = [
    {
      id: 1,
      title: "Yakka va kichik jamoalar",
    },

    {
      id: 2,
      title: "Korxonalar va korxonalar",
    },
  ];

  const content = [
    {
      id: 1,
      element: SmallTeams,
      value: "Yakka va kichik jamoalar",
    },
    {
      id: 2,
      element: Enterprises,
      value: "Korxonalar va korxonalar",
    },
  ];

  return (
    <Container fluid className="h-max">
      <Container fluid type="section">
        <Title type="section">Obuna</Title>
        <div className="min-h-h">
          <Tabs
            content={content}
            menu_items={menu_items}
            defaultValue="Yakka va kichik jamoalar"
          />
        </div>
      </Container>
    </Container>
  );
};

export default Subscribe;
