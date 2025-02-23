import { FC } from "react";

interface GenericSpinnerLoaderProps {
  className?: string;
}

const SpinnerLoader: FC<GenericSpinnerLoaderProps> = () => {
  return (
    <div role="status" className="hover:cursor-wait">
      <div className="spinner-loader"></div>
    </div>
  );
};

export default SpinnerLoader;
