import styles from './Sidebar.module.scss';

const SidebarHeader = () => {
  return (
    <div className={styles.sidebar_header}>
      <h1 className={styles.sidebar_header_logo}>WORKSIDE</h1>
    </div>
  );
};

export default SidebarHeader;
