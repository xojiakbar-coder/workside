// native and custom hooks
import { storage } from '@/services';
import { useEffect, useState } from 'react';

// routes outlet
import { Outlet } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

// styles
import cx from 'clsx';
import styles from './Layout.module.scss';
import { UnstyledButton } from '@mantine/core';

// icons
import { IconLayoutSidebar, IconLayoutSidebarFilled } from '@tabler/icons-react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(storage.local.get('isSidebarOpen') ?? true);

  useEffect(() => {
    storage.local.set('isSidebarOpen', isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.action_bar}>
        <UnstyledButton onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={styles.action_bar_toggle_btn}>
          {isSidebarOpen ? <IconLayoutSidebar stroke={2} /> : <IconLayoutSidebarFilled stroke={2} />}
        </UnstyledButton>
      </div>
      <div className={styles.container}>
        <aside className={cx(styles.aside, isSidebarOpen ? styles.aside_open : styles.aside_closed)}>
          <Sidebar />
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
