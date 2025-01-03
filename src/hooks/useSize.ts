import { useState, useEffect } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
    scrollY: number;
    scrollX: number;
  }>({
    width: 0,
    height: 0,
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return windowSize;
};

export default useSize;
