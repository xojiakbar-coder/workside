import Logo from "../Navbar/Logo";
import Profiles from "../Navbar/Profiles";

const Footer = () => {
  return (
    <footer
      className={`sticky z-[999] backdrop-blur-[20px] bg-[#09090bf5] top-0 w-full h-max min-h-max`}
    >
      <div
        className={`flex justify-between items-center flex-col px-[3%] py-[25px] transition-all border-t border-t-[#111111] ease-out duration-[230ms] h-full`}
      >
        <div className="flex items-center justify-between w-full md:flex-row gap-[30px] flex-col">
          <Logo logo={false} />
          <Profiles />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
