// import Logo from "./Logo";
// // import Item from "./Item";
// import Lang from "./Lang";
// import { FC } from "react";
// // import Drawer from "./Drawer";
// import useSize from "../../hooks/useSize";
// import { Button, Timer } from "../Generic";
// // import { LuAlignLeft } from "react-icons/lu";
// import { useLocation, useNavigate } from "react-router-dom";
// import SidebarDrawer from "./SidebarDrawer";

// import Logo from './Logo';
import styles from './Header.module.scss';

// interface NavbarPropsType {
//   type?: "home" | "signup";
// }

// const Navbar: FC<NavbarPropsType> = ({ type }) => {
//   const { scrollY } = useSize();
//   const navigate = useNavigate();
//   // const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

//   // const toggleDrawer = () => {
//   //   setIsDrawerOpen(!isDrawerOpen);
//   // };

//   const location = useLocation();
//   let shdaowVisible = false;
//   let shadow = false;
//   if (scrollY !== null && scrollY > 5) {
//     shadow = true;
//   }

//   if (!location.pathname.search("/umumiy") || !location.pathname.search("/")) {
//     shdaowVisible = true;
//   }

//   return (
//     <header
//       className={`sticky z-[999] bg-body-bg-color ${
//         !shadow && shdaowVisible && "border-b border-border-color"
//       } top-0 w-full h-[78px] min-h-[78px] ${
//         type === "signup" && "border-b border-dark-bg-color"
//       }`}
//     >
//       <div
//         className={`flex justify-between items-center ${
//           shadow && "shadow-navbar-shadow"
//         } px-[3%] py-[25px] transition-all ease-out duration-[230ms] h-full`}
//       >
//         <div className={type !== "signup" ? "992:flex hidden" : ""}>
//           <Logo />
//         </div>
//         {type !== "signup" && (
//           <div className="992:flex hidden items-center gap-[28px]">
//             {/* <Item dir="row" /> */}
//             <Timer format="LT" bottom_date_visible={false} />
//             <Lang />
//             <Button
//               type="outline"
//               onClick={() => navigate("/signup")}
//               className="w-max font-[500] text-[14px] nav-btn"
//             >
//               Sign Up
//             </Button>
//           </div>
//         )}
//         <div className="992:hidden flex w-full justify-between">
//           <div
//             className="992:hidden flex select-none py-[7px] cursor-pointer rounded-[8px] transition duration-[240ms] ease-in-out"
//             // onClick={toggleDrawer}
//           >
//             <SidebarDrawer />
//           </div>
//           {type !== "signup" && <Logo />}
//           {type !== "signup" && <Lang />}
//         </div>
//         {type === "signup" && (
//           <Button type="outline" className="rounded-md nav-btn">
//             Contact
//           </Button>
//         )}
//       </div>
//       {/* <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} /> */}
//     </header>
//   );
// };

// export default Navbar;

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Logo /> */}
      <div className={styles.title_bar}>1</div>
      <div className={styles.action_bar}>2</div>
    </header>
  );
};

export default Header;
