import { storage } from '@/services';
import { useEffect, useState } from 'react';
import { sidebar_items } from '@utils/data/sidebar';

import cx from 'clsx';
import styles from './Sidebar.module.scss';

import { IconChevronRight } from '@tabler/icons-react';
import { NavLink, useLocation } from 'react-router-dom';

const SidebarBody = () => {
  const location = useLocation();
  const [activeItems, setActiveItems] = useState<number[]>([]);

  const handleClick = (id: number) => {
    if (activeItems.includes(id)) {
      setActiveItems(prev => prev.filter(item => item !== id));
      storage.local.set(
        'activeItems',
        activeItems.filter(item => item !== id)
      );
    } else {
      setActiveItems(prev => [...prev, id]);
      storage.local.set('activeItems', [...activeItems, id]);
    }
  };

  useEffect(() => {
    const saved = storage.local.get('activeItems');
    if (Array.isArray(saved)) {
      setActiveItems(saved);
    }
  }, []);

  return (
    <div className={styles.sidebar_body}>
      <div className={styles.items_wrapper}>
        {sidebar_items.map(parent => {
          if (!parent.children) {
            return (
              <NavLink
                key={parent.id}
                to={parent.name}
                className={cx(styles.item, location.pathname === parent.name && styles.item_active)}
              >
                <div>{parent.title}</div>
              </NavLink>
            );
          } else {
            return (
              <div key={parent.id} className={cx(activeItems.includes(+parent.id) && styles.item_wrapper)}>
                <NavLink
                  to={parent.name}
                  className={cx(
                    styles.children_item_parent,
                    location.pathname === parent.name && styles.children_item_parent_active
                  )}
                  onClick={() => handleClick(+parent.id)}
                >
                  <div>{parent.title}</div>
                  <IconChevronRight
                    stroke={2}
                    className={cx(styles.item_icon, activeItems.includes(+parent.id) && styles.item_active_icon)}
                  />
                </NavLink>
                {activeItems.includes(+parent.id) && (
                  <div className={styles.item_children_body}>
                    {parent.children.map((item, index) => {
                      return (
                        <NavLink
                          key={item.id}
                          to={item.name}
                          className={cx(
                            styles.item_children_item,
                            parent.children && parent.children.length - 1 === index && styles.item_last_child_item,
                            location.pathname === item.name && styles.item_active_children_item
                          )}
                        >
                          <div>{item.title}</div>
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SidebarBody;
