import styles from './Sidebar.module.scss';

import config from '@/core/config/config';

const SidebarFooter = () => {
  return (
    <div className={styles.sidebar_footer_container}>
    <div className={styles.sidebar_footer}>
      <div className={styles.sidebar_footer_title}>WORKSIDE</div>
      <div className={styles.sidebar_footer_version}>
        <p>{'v' + config.projectCurrentVersion.version}</p>
      </div>
    </div>
    </div>
  );
};

export default SidebarFooter;
