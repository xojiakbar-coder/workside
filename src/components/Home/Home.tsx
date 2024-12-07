import { FC } from "react";
import { Button } from "../Generic";

const Home: FC = () => {
  return (
    <div className="h-[92vh] min-h-[92vh]">
      <div className="grid items-center grid-cols-1 w-full justify-between h-full bg-file-image bg-right-top bg-no-repeat">
        <div className="flex flex-col justify-center items-center bg-home-page bg-top bg-no-repeat h-full overflow-y-auto w-full">
          <div className="flex flex-col gap-[20px] h-max w-max mt-[-20vh]">
            <div>
              <h1 className="uppercase font-mont my-[14px] font-bold text-[62px] text-light">
                UZREPO
                <mark className="text-light font-bold text-[62px] bg-primary-btn rounded-md px-[3px]">
                  DASH
                </mark>
              </h1>
            </div>
            <div>
              <p className="text-[19px] text-subtitle-color font-semibold text-center">
                Katta ishlar biz bilan osonroq
              </p>
            </div>
            <div className="grid grid-cols-2 items-center justify-between gap-[10px] mt-[28px]">
              <Button type="solid" className="w-full h-[74px]">
                Ishlarni boshlash
              </Button>
              <Button type="surface" className="w-full h-[74px]">
                View demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
