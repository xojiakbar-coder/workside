import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Logout: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center text-light bg-dark-bg-color px-[16px] py-[18px] border-t border-outer-bdr-color">
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer font-grotesk text-[22px] w-max text-danger font-extrabold"
      >
        Log out
      </div>
    </div>
  );
};

export default Logout;
