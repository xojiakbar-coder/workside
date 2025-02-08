import { FC } from "react";
import Layout from "./layout";
import Sidebar from "../components/Sidebar";
import navbar_items from "../utils/data/navbar";
import SignUp from "../components/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/NotFound";
import { home_sections } from "../utils/data/home";
import { sidebar_items } from "../utils/data/sidebar";

const Root: FC = () => {
  return (
    <Routes>
      {/* Main Home page */}
      <Route
        path="/"
        element={
          <Layout>
            {home_sections.map((item) => {
              const { id, element: Element } = item;
              return <Element key={id} />;
            })}
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

      {/* Routing for Sidebar items */}
      <Route element={<Sidebar />}>
        {sidebar_items.map((item) => {
          const { id, name, element: Element } = item;
          return <Route key={id} path={name} element={<Element />} />;
        })}
      </Route>

      {/* Routing for Sidebar children items */}
      <Route element={<Sidebar />}>
        {sidebar_items.map((item) => {
          const { children } = item;
          return children.map((child) => {
            const { id, name, element: Element } = child;
            return <Route key={id} path={name} element={<Element />} />;
          });
        })}
      </Route>

      {/* SignIn and SignUp pages */}
      <Route path="/signin" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />

      {/* 404 NOT FOUND page */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Root;
