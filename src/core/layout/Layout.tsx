import styles from './Layout.module.scss';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Header />
        <div className={styles.pages_wrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
