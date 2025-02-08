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
        <Fragment>
          <Navbar />
          <div className="overflow-y-auto">
            {children}
          </div>
          <Footer />
        </Fragment>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
