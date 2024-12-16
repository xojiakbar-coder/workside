import { useState, useEffect } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number | null;
    height: number | null;
    scrollY: number | null;
    scrollX: number | null;
  }>({
    width: null,
    height: null,
    scrollX: null,
    scrollY: null,
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
