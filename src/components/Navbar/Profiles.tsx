import * as Icons from "react-icons/ri";
import { useEffect, useState } from "react";
import { ProfilesItemType } from "../../utils/data/navbar";

const Profiles = () => {
  const [data, setData] = useState<ProfilesItemType[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/profiles");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex items-center gap-[16px]">
      {data.map(({ id, name, icon: iconName }) => {
        const IconComponent =
          Icons[iconName as keyof typeof Icons] || Icons.RiGithubFill;
        return (
          <div
            key={id}
            title={name}
            className="flex items-center justify-center rounded-md hover:bg-primary-btn w-[50px] h-[50px] transition-all ease-out duration-[215ms] cursor-pointer text-[24px]"
          >
            <IconComponent title={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
