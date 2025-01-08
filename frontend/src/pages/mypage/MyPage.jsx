import { Outlet, Link, useLocation } from 'react-router-dom';
import { FaUser, FaCog, FaStar } from 'react-icons/fa';

import styles from './MyPage.module.css';

const MyPage = () => {
  const location = useLocation();

  return (
    <div className={styles.mypage}>
      {/* Sidebar */}
      <nav className={styles.sidebar}>
        <ul>
          <li
            className={
              location.pathname === '/mypage/activity' ? styles.active : ''
            }
          >
            <Link to="/mypage/activity">
              <FaStar />
              활동 내역
            </Link>
          </li>
          <li
            className={
              location.pathname === '/mypage/profile' ? styles.active : ''
            }
          >
            <Link to="/mypage/profile">
              <FaUser />
              프로필
            </Link>
          </li>
          <li
            className={
              location.pathname === '/mypage/account' ? styles.active : ''
            }
          >
            <Link to="/mypage/account">
              <FaCog />
              계정 정보
            </Link>
          </li>
        </ul>
      </nav>

      {/* 하위 라우트 렌더링 */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MyPage;
