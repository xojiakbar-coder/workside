import { profiles_data } from "../../utils/data/navbar";

const Profiles = () => {
  return (
    <div className="flex items-center gap-[16px]">
      {profiles_data.map(({ id, name, icon: Icon }) => (
        <div
          key={id}
          title={name}
          className="flex items-center justify-center rounded-md hover:bg-primary-btn w-[50px] h-[50px] transition-all ease-out duration-[215ms] cursor-pointer text-[24px]"
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default Profiles;
