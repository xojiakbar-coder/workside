import Logo from "../Navbar/Logo";
import { Button } from "../Generic";
import { Input } from "@chakra-ui/react";
import { PasswordInput } from "../ui/password-input";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center px-[3%] py-[25px] justify-between h-[78px] w-full border-b border-b-border-color">
        <Logo />
        <Button type="outline">Contact</Button>
      </div>
      <div className="flex items-center justify-center flex-col register w-full px-[3%]">
        <div className="flex flex-col py-[40px] justify-between 768:w-[600px] w-full border border-ghost-bg-color px-[37px] h-max min-h-max rounded-[14px] gap-[60px]">
          <div className="flex items-center justify-center w-full gap-[20px]">
            <div
              onClick={() => navigate("/signin")}
              className={`cursor-pointer 992:text-[20px] text-[18px]
              ${
                location.pathname === "/signin"
                  ? "text-primary-color"
                  : "text-light select-none"
              }
            `}
            >
              Kirish
            </div>
            <div
              onClick={() => navigate("/signup")}
              className={`cursor-pointer 992:text-[20px] text-[18px]
              ${
                location.pathname === "/signup"
                  ? "text-primary-color"
                  : "text-light select-none"
              }
              `}
            >
              Ro'yxatdan o'tish
            </div>
          </div>
          <div className="flex flex-col w-full justify-start gap-[50px] h-full">
            <div className="flex flex-col gap-[30px]">
              <Input
                variant="outline"
                placeholder="Your email address"
                className="flex items-center outline-none rounded-[4px] border border-ghost-bg-color py-[18px] px-[20px] h-max 992:text-[18px] text-[14px]"
              />
              <PasswordInput
                variant="outline"
                placeholder="Your password"
                className="flex items-center outline-none rounded-[4px] border border-ghost-bg-color py-[18px] px-[20px] h-max 992:text-[18px] text-[14px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] w-full mt-auto justify-center items-center">
            <Button type="solid" className="w-full font-semibold">
              Yuborish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
