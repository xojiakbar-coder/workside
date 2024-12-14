import { FC } from "react";
import Layout from "./layout";
import Home from "../components/Home/Home";
import navbar_items from "../utils/navbar";
import Sidebar from "../components/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";
import sidebar_items from "../utils/sidebar";
import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";
import GenericElement from "../view";

const Root: FC = () => {
  return (
    <Routes>
      {/* Main Home page */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* Routing for Navbar items */}
      {navbar_items.map((item) => {
        const { id, path, sidebar, element: Element } = item;

        if (sidebar) {
          return (
            <Route key={id} element={<Sidebar />}>
              <Route path={path} element={<Element />} />
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

      {sidebar_items.map((item) => {
        const { id, children, name, element: Element } = item;

        if (children?.length) {
          return children.map((child) => {
            const ChildElement = child.element || GenericElement;
            return (
              <Route element={<Sidebar />} key={child.id}>
                <Route path={child.name} element={<ChildElement />} />
              </Route>
            );
          });
        } else if (Element) {
          return (
            <Route element={<Sidebar />} key={id}>
              <Route path={name} element={<Element />} />
            </Route>
          );
        } else {
          return null;
        }
      })}

      {/* SignIn and SignUp pages */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 404 NOT FOUND page */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Root;
