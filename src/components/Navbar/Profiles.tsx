import { RiGithubFill, RiInstagramLine, RiTelegramFill } from "react-icons/ri";

const Profiles = () => {
  const iconSyle = `flex items-center justify-center rounded-xl hover:bg-ghost-bg-color w-[50px] h-[50px] transition-all ease-out duration-[215ms] cursor-pointer text-[24px]`;
  return (
    <div className="flex items-center gap-[16px]">
      <div className={iconSyle}>
        <RiInstagramLine />
      </div>
      <div className={iconSyle}>
        <RiTelegramFill />
      </div>
      <div className={iconSyle}>
        <RiGithubFill />
      </div>
    </div>
  );
};

export default Profiles;
