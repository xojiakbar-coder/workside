import { Text } from '@mantine/core';
import { IconSlash } from '@tabler/icons-react';
import { NavLink, useLocation } from 'react-router-dom';

import cx from 'clsx';
import styles from './Breadcrumbs.module.scss';

type IProps = {};

const Breadcrumbs = ({}: IProps) => {
  const { pathname } = useLocation();
  const segments = pathname.split('/').filter(Boolean);
  const isSingle = segments.length === 1;

  if (pathname === '/') {
    return (
      <div className={styles.breadcrumbs_wrapper}>
        <Text className={styles.breadcrumb_title}>Dashboard</Text>
      </div>
    );
  }

  return (
    <div className={styles.breadcrumbs_wrapper}>
      {segments.map((segment, index) => {
        const isLast = index === segments.length - 1;
        const path = '/' + segments.slice(0, index + 1).join('/');

        return (
          <div key={path} className={styles.breadcrumb_segment}>
            {!isLast ? (
              <>
                <NavLink to={path} className={cx(styles.link_item, styles.breadcrumb_item)}>
                  {segment}
                </NavLink>
                <IconSlash stroke={2} className={styles.separator} />
              </>
            ) : isSingle ? (
              <Text className={styles.breadcrumb_title}>{segment}</Text>
            ) : (
              <Text className={styles.breadcrumb_item}>{segment.split('-').join(' ')}</Text>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
