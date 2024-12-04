import { FC } from "react";
import { Button } from "@chakra-ui/react";

const Home: FC = () => {
  return (
    <>
      <div className="px-[3%] h-max min-h-[100vh] border-b">
        <div className="flex flex-col pt-[26vh] justify-center items-center h-full overflow-y-auto">
          <div>
            <h1 className="uppercase font-mont my-[14px] font-bold text-[62px]">
              Dashboard
            </h1>
          </div>
          <div>
            <p
              className="relative inline-block px-12 py-3 text-white font-semibold text-lg font-poppins no-underline whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-subtitle-color via-white to-subtitle-color animate-shine"
              style={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Hisobotlaringizni biz bilan tez va samarali tayyorlang
            </p>
          </div>
          <div className="mt-[28px]">
            <Button className="flex items-center font-grotesk font-extrabold text-[22px] bg-primary-btn text-light px-[24px] rounded-[10px] py-[35px] hover:opacity-75 text-center outline-none">
              Ketdikmi
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
