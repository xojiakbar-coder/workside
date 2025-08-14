import styles from './Header.module.scss';
import { Flex, UnstyledButton } from '@mantine/core';

// icons
import { IconLayoutSidebar, IconLayoutSidebarFilled } from '@tabler/icons-react';

// import React from 'react'
import { Breadcrumbs } from '@/shared/components';
import useLayout from '@/core/context/Layout/usage';

const TopActionBar = () => {
  const {
    layout: { sidebarView },
    setLayout
  } = useLayout();

  return (
    <Flex align="center" gap="md">
      <Breadcrumbs />
      <div className={styles.action_bar}>
        <UnstyledButton
          className={styles.action_bar_toggle_btn}
          onClick={() => setLayout(prev => ({ ...prev, sidebarView: !sidebarView }))}
        >
          {!sidebarView ? <IconLayoutSidebar stroke={2} /> : <IconLayoutSidebarFilled stroke={2} />}
        </UnstyledButton>
      </div>
    </Flex>
  );
};

export default TopActionBar;
