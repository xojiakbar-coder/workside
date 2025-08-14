import TopActionBar from './TopActionBar';
import BottomActionBar from './BottomActionBar';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.top_action_bar}>
        <TopActionBar />
      </div>
      <div className={styles.bottom_action_bar}>
        <BottomActionBar />
      </div>
    </header>
  );
};

export default Header;
