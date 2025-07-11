import SidebarBody from './Body';
import SidebarFooter from './Footer';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <SidebarBody />
      <SidebarFooter />
    </div>
  );
};

export default Sidebar;
