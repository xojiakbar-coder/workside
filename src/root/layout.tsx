import GenericElement from '../view/GenericPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FC, Fragment, ReactNode } from 'react';

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
          <Footer />
        </Fragment>
      ) : (
        <GenericElement />
      )}
    </Fragment>
  );
};

export default Layout;
