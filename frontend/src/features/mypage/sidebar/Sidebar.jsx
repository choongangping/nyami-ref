import { FaUser, FaCog, FaStar } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { link: '/mypage/profile', icon: FaUser, label: '프로필' },
    { link: '/mypage/account', icon: FaCog, label: '계정 정보' },
    { link: '/mypage/like', icon: FaStar, label: '좋아요' },
    { link: '/mypage/review', icon: FaStar, label: '리뷰' },
  ];

  return (
    <nav className={styles.sidebar}>
      <ul>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            link={item.link}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
