import styles from './Sidebar.module.scss';

import config from '@/core/config/config';

const SidebarFooter = () => {
  return (
    <div className={styles.sidebar_footer}>
      <div className={styles.sidebar_footer_version}>
        <p>{'v' + config.projectCurrentVersion.version}</p>
      </div>
    </div>
  );
};

export default SidebarFooter;
