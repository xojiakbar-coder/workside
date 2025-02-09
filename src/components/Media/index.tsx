import { Container, Title } from "../Generic";

const Media = () => {
  return (
    <Container fluid type="section" className="overflow-y-auto">
      <Title type="section">Media mahsulotlar</Title>
      <Container fluid className="flex flex-col gap-[20px]">
        <div className="w-full h-[450px] px-[30px] py-[20px] inst rounded-md">
          <div className="flex items-center justify-center 992:text-[22px] 576:text-[16px] text-[14px] text-center text-balance px-[14px] font-semibold w-full h-[80%] rounded-md bg-gray-color">
            Any media photo or video product will go here!
          </div>
          <div className="flex items-center justify-between my-[14px] w-full">
            <div>Title</div>
            <div>Rating resault</div>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Media;
