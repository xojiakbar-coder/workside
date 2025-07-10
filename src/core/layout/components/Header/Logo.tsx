import cx from 'clsx';
import styles from './Header.module.scss';
import { useMantineColorScheme } from '@mantine/core';

import { useLocation, useNavigate } from 'react-router-dom';
import { IconDeviceDesktopAnalytics } from '@tabler/icons-react';

const Logo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { colorScheme } = useMantineColorScheme();

  const handleNavigate = () => {
    if (location.pathname !== '/') navigate('/');
    else navigate('/dashboard');
  };

  return (
    <div
      onClick={e => {
        e.stopPropagation();
        handleNavigate();
      }}
      className={styles.logo}
    >
      <IconDeviceDesktopAnalytics stroke={1.25} className={cx(styles[colorScheme])} />
    </div>
  );
};

export default Logo;
