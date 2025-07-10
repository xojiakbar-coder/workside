// import SidebarTabs from './Tabs.tsx';
// import { FC, useEffect, useState } from 'react';
// import { NavLink, useLocation, useNavigate } from 'react-router-dom';
// import { OpenState, sidebar_items, SidebarItemType } from '../../../utils/data/sidebar.ts';

// interface SidebarPropsType {
//   onClose?: () => void;
//   toggleSidebar?: boolean;
// }

// const SidebarItems: FC<SidebarPropsType> = ({ onClose, toggleSidebar }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState<OpenState>([]);

//   useEffect(() => {}, [toggleSidebar]);

//   useEffect(() => {
//     const path = JSON.parse(localStorage.getItem('open') || '[]') as OpenState;
//     setOpen(path);
//   }, []);

//   const onClickParent = (item: SidebarItemType, e: React.MouseEvent<HTMLDivElement>) => {
//     if (location.pathname !== item.name) navigate(item.name);
//     if (open.includes(item.id)) {
//       const data = open.filter(val => val !== item.id);
//       localStorage.setItem('open', JSON.stringify(data));
//       setOpen(data);
//     } else {
//       localStorage.setItem('open', JSON.stringify([...open, item.id]));
//       setOpen([...open, item.id]);
//     }

//     if (!item.children.length && item.name) {
//       e.preventDefault();
//       navigate(item.name);
//     }
//   };

//   const generalSidebarItemStyle = `flex items-center ${
//     toggleSidebar && 'justify-center'
//   } group text-[14px] text-left gap-[14px] cursor-pointer text-item-color hover:text-light transition-all ease-out duration-[115ms] h-[47px] min-h-[47px] px-[14px] font-mont font-medium hover:bg-dark-bg-color`;

//   return (
//     <div className="w-full h-max flex flex-col gap-[12px] px-[16px] py-[24px] select-none">
//       {sidebar_items.map(item => {
//         const Icon = item.icon;
//         const active = open.includes(item.id);
//         const activeRotate = active ? 'rotate-90' : 'rotate-0';
//         const activePath = location.pathname.includes(item.name);

//         if (item.children?.length) {
//           return (
//             <div key={item.id}>
//               <div
//                 className={`${active && 'bg-ghost-bg-color rounded-md'} ${
//                   toggleSidebar ? 'group flex items-center' : ''
//                 }`}
//               >
//                 <div
//                   title={item.title}
//                   onClick={e => onClickParent(item, e)}
//                   className={`${generalSidebarItemStyle} flex items-center ${
//                     !toggleSidebar ? 'justify-between' : 'justify-center'
//                   } ${activePath && 'text-primary-color hover:text-primary-color bg-dark-bg-color'}
//                   ${!active ? 'rounded-md' : 'rounded-t-md'}
//                   `}
//                 >
//                   <p className="flex items-center gap-[14px] text-inherit">
//                     <Icon className="text-[20px] cursor-pointer" />
//                     {!toggleSidebar && item.title}
//                   </p>
//                   {!toggleSidebar && <i className={`fa-solid fa-angle-right text-inherit ${activeRotate}`} />}
//                 </div>
//                 {active && (
//                   <>
//                     {!toggleSidebar && (
//                       <SidebarTabs
//                         type="link"
//                         data={item.children}
//                         toggleSidebar={toggleSidebar ? toggleSidebar : false}
//                       />
//                     )}
//                   </>
//                 )}
//                 <div className="absolute w-0 min-w-0 group-hover:w-[330px] group-hover:min-w-[330px] overflow-y-auto z-[888] mt-[50px] ml-[31px] left-[50px] tabs h-max">
//                   <SidebarTabs
//                     type="sidebar"
//                     data={item.children}
//                     toggleSidebar={toggleSidebar ? toggleSidebar : false}
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         } else {
//           return (
//             <NavLink
//               key={item.id}
//               onClick={onClose}
//               title={item.title}
//               to={item.name || ''}
//               className={({ isActive }) =>
//                 `${generalSidebarItemStyle} rounded-md ${
//                   isActive ? 'text-primary-color hover:text-primary-color bg-dark-bg-color' : 'hover:text-light'
//                 }`
//               }
//             >
//               <Icon className="text-[20px]" />
//               {!toggleSidebar && item.title}
//             </NavLink>
//           );
//         }
//       })}
//     </div>
//   );
// };

// export default SidebarItems;

import { useState } from 'react';
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconSettings,
  IconUser
} from '@tabler/icons-react';
import styles from './Sidebar.module.css';
import { Title, Tooltip, UnstyledButton } from '@mantine/core';

const mainLinksMockdata = [
  { icon: IconHome2, label: 'Home' },
  { icon: IconGauge, label: 'Dashboard' },
  { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' },
  { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' }
];

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages'
];

export function DoubleNavbar() {
  const [active, setActive] = useState('Releases');
  const [activeLink, setActiveLink] = useState('Settings');

  const mainLinks = mainLinksMockdata.map(link => (
    <Tooltip label={link.label} position="right" withArrow transitionProps={{ duration: 0 }} key={link.label}>
      <Button
        onClick={() => setActive(link.label)}
        className={styles.mainLink}
        data-active={link.label === active || undefined}
      >
        <link.icon size={22} stroke={1.5} />
      </Button>
    </Tooltip>
  ));

  const links = linksMockdata.map(link => (
    <a
      className={styles.link}
      data-active={activeLink === link || undefined}
      href="#"
      onClick={event => {
        event.preventDefault();
        setActiveLink(link);
      }}
      key={link}
    >
      {link}
    </a>
  ));

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <div className={styles.logo}>Logo</div>
          {mainLinks}
        </div>
        <div className={styles.main}>
          <Title order={4} className={styles.title}>
            {active}
          </Title>

          {links}
        </div>
      </div>
    </nav>
  );
}
