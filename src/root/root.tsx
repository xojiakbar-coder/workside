import { FC } from "react";
import Layout from "./layout";
import navbar_items from "@/utils/navbar";
import Sidebar from "@/components/Sidebar";
import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";

const Root: FC = () => {
  return (
    <Routes>
      {navbar_items.map((item) => {
        const { id, path, sidebar, element: Element } = item;

        if (sidebar) {
          return (
            <Route key={id} element={<Sidebar />}>
              <Route path="/hisobotlar" element={<Element />} />
            </Route>
          );
        } else {
          return (
            <Route
              key={id}
              path={path}
              element={
                <Layout>
                  <Element />
                </Layout>
              }
            />
          );
        }
      })}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default Root;
