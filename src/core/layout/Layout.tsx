// routes outlet
import { Outlet } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// styles
import cx from 'clsx';
import styles from './Layout.module.scss';
import useLayout from '../context/Layout/usage';

const Layout = () => {
  const {
    layout: { sidebarView }
  } = useLayout();

  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.container}>
        <aside className={cx(styles.aside, sidebarView ? styles.aside_open : styles.aside_closed)}>
          <div className={styles.aside_space_wrapper}>
            <Sidebar />
          </div>
        </aside>
        <main className={styles.main}>
          <Header />
          <div className={styles.pages_wrapper}>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
