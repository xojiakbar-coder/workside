import { FC } from "react";
// import Navbar from "@/components/Navbar";
import { Route, Routes } from "react-router-dom";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";

const Root: FC = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navbar />} /> */}
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default Root;
