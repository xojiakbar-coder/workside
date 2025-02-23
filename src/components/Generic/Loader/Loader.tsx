import { FC } from "react";
import SpinnerLoader from "./Spinner";
import useLockBodyScroll from "../../../hooks/useLockBodyScroll";

interface GenericLoaderProps {
  type: "home" | "section" | "home-pgs";
  loader_type: "spinner" | "dots" | "3d";
}

const getLoaderStyle = (type: GenericLoaderProps["type"]) => {
  switch (type) {
    case "home":
      return "absolute top-0 left-0 h-full";
    case "section":
      return "section-load";
    case "home-pgs":
      return "home-pgs";
    default:
      return "h-full";
  }
};

const Loader: FC<GenericLoaderProps> = ({ type, loader_type }) => {
  if (type === "home") {
    useLockBodyScroll(true);
  }
  return (
    <div
      className={`flex items-center justify-center w-full bg-body-bg-color ${getLoaderStyle(
        type
      )}`}
    >
      {loader_type === "spinner" && <SpinnerLoader />}
    </div>
  );
};

export default Loader;
