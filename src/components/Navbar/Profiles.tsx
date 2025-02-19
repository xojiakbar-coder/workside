import * as Icons from "react-icons/ri";
import { useEffect, useState } from "react";
import BASE_URL from "../../config/baseUrl";
import { ProfilesItemType } from "../../utils/data/navbar";

const Profiles = () => {
  const [data, setData] = useState<ProfilesItemType[]>([]);

  useEffect(() => {
    fetch(`${BASE_URL}/profiles`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center gap-[16px]">
      {data.length &&
        data.map(({ id, name, icon: iconName }) => {
          const IconComponent =
            Icons[iconName as keyof typeof Icons] || Icons.RiGithubFill;
          return (
            <div
              key={id}
              title={name}
              className="flex items-center justify-center rounded-xl hover:bg-ghost-bg-color w-[50px] h-[50px] transition-all ease-out duration-[215ms] cursor-pointer text-[24px]"
            >
              <IconComponent title={name} />
            </div>
          );
        })}
    </div>
  );
};

export default Profiles;
