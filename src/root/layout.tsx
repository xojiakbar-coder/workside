import GenericElement from "../view";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FC, Fragment, ReactNode } from "react";

interface ChildrenPageProps {
  children?: ReactNode;
}

const Layout: FC<ChildrenPageProps> = ({ children }) => {
  return (
    <Fragment>
      {children ? (
        <div>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
