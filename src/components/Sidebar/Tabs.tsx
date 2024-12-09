import { Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect, FC, Fragment } from "react";

interface TabDataType {
  id: number | string;
  name?: string;
  title: string;
}

interface TabsProps {
  data: TabDataType[];
}

const Tabs: FC<TabsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<number | string>(data[0]?.id || 0);
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: "0px",
    height: "0px",
  });
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const currentTabIndex = data.findIndex((tab) => tab.id === activeTab);
    const currentTab = tabRefs.current[currentTabIndex];
    if (currentTab) {
      setIndicatorStyle({
        top: `${currentTab.offsetTop}px`,
        height: `${currentTab.offsetHeight}px`,
      });
    }
  }, [activeTab, data]);

  return (
    <Fragment>
      {data && data.length > 0 ? (
        <div className="w-full max-w-4xl mx-auto flex">
          <div className="flex flex-col relative border-l border-outer-bdr-color w-full gap-[12px] my-[10px]">
            {data.map((item, index) => {
              const { id, title, name } = item;
              return (
                <NavLink
                  key={id}
                  to={name || "#"}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => setActiveTab(id)}
                  className={({ isActive }) =>
                    `flex items-center group hover:bg-ghost-bg-color p-2 rounded-r-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color ${
                      isActive ? "text-primary-btn" : "hover:text-light"
                    } flex items-center group hover:bg-ghost-bg-color p-2 rounded-r-lg text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color transition-all duration-300 ${
                      activeTab === id ? "text-primary-btn" : "hover:text-light"
                    }`
                  }
                >
                  {title}
                </NavLink>
              );
            })}
            {/* Active tab indicator */}
            <span
              className="absolute left-0 w-1 bg-primary-btn transition-all duration-300 rounded-r-md"
              style={indicatorStyle}
            />
          </div>
        </div>
      ) : (
        <Heading>No data available</Heading>
      )}
    </Fragment>
  );
};

export default Tabs;
