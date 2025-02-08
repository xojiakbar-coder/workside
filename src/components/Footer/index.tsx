import Logo from "../Navbar/Logo";
import Profiles from "../Navbar/Profiles";

const Footer = () => {
  return (
    <footer
      className={`backdrop-blur-[20px] z-[600] h-[70px] w-full bg-body-bg-color border-t border-ghost-bg-color w-full h-[78px] min-h-[78px]`}
    >
      <div
        className={`flex justify-between items-center px-[3%] transition-all border-t border-t-[#111111] ease-out duration-[230ms] h-full`}
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
