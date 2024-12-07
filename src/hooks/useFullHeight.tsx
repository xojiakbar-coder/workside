import { useEffect } from "react";

const useFullHeight = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const setFullHeight = () => {
      if (ref.current) {
        ref.current.style.height = `${window.innerHeight}px`;
      }
    };

    // Sahifa yuklangan paytda boshlang'ich balandlikni o'rnatish
    setFullHeight();

    // Window o'lchami o'zgarganda qayta hisoblash
    window.addEventListener("resize", setFullHeight);

    // Cleanup
    return () => {
      window.removeEventListener("resize", setFullHeight);
    };
  }, [ref]);
};

export default useFullHeight;
