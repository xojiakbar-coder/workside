import GenericElement from "../view";
import Navbar from "../components/Navbar";
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
          <div>{children}</div>
          {/* <div>Footer</div> */}
        </Fragment>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
