import { FaUser, FaCog, FaHeart, FaMarker } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const menuItems = [
    { link: '/mypage/profile', icon: FaUser, label: '프로필' },
    { link: '/mypage/account', icon: FaCog, label: '계정 정보' },
    { link: '/mypage/like', icon: FaHeart, label: '좋아요' },
    { link: '/mypage/review', icon: FaMarker, label: '리뷰' },
  ];

  return (
    //  <nav> 태그: 내비게이션 역할을 명시적으로 나타내는 의미론적 태그로, 검색 엔진이나 스크린 리더가 이를 내비게이션 영역으로 인식합니다.
    //  <div> 태그: 의미가 없는 단순한 컨테이너로 사용됩니다. 따라서 스크린 리더나 검색 엔진이 이 영역을 내비게이션으로 인식하지 못합니다.
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
