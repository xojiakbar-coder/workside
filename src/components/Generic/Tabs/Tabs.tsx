import { Heading } from "@chakra-ui/react";
import { TabsProps } from "../../../utils/types/tabs";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, FC, Fragment } from "react";

const Tabs: FC<TabsProps> = ({ data }) => {
  const location = useLocation();
  const [indicatorStyle, setIndicatorStyle] = useState({
    top: "0px",
    height: "0px",
    display: "none",
  });
  const tabRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const updateIndicator = (activeTabIndex: number) => {
    const currentTab = tabRefs.current[activeTabIndex];
    if (currentTab) {
      setIndicatorStyle({
        top: `${currentTab.offsetTop}px`,
        height: `${currentTab.offsetHeight}px`,
        display: "block",
      });
    } else {
      setIndicatorStyle({
        top: "0px",
        height: "0px",
        display: "none",
      });
    }
  };

  useEffect(() => {
    const activeTabIndex = data.findIndex(
      (tab) => location.pathname === tab.name
    );
    updateIndicator(activeTabIndex);
  }, [location.pathname, data]);

  const handleTabClick = (index: number) => {
    updateIndicator(index);
  };

  return (
    <Fragment>
      {data && data.length > 0 ? (
        <div className="w-full max-w-4xl mx-auto flex pl-[8px]">
          <div className="flex flex-col relative border-l border-outer-bdr-color w-full gap-[16px] my-[12px]">
            {data.map((item, index) => {
              const { id, title, name } = item;

              return (
                <NavLink
                  key={id}
                  to={name}
                  ref={(el) => (tabRefs.current[index] = el)}
                  onClick={() => handleTabClick(index)}
                  className={`flex items-center group hover:bg-ghost-bg-color p-2 rounded-r-xl text-left cursor-pointer h-[47px] min-h-[47px] px-[14px] font-grotesk text-item-color hover:text-light transition-all duration-300 ${
                    location.pathname === name &&
                    "text-primary-btn bg-ghost-bg-color hover:text-primary-btn"
                  }`}
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
