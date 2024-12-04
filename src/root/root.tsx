import { FC } from "react";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home/Home";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

const Root: FC = () => {
  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Root;
