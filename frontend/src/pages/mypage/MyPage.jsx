import { Outlet } from 'react-router-dom';

import styles from './MyPage.module.css';
import Sidebar from '../../features/mypage/sidebar/Sidebar';

const MyPage = () => {
  return (
    <div className={styles.mypage}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {/* 하위 라우트 렌더링 */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default MyPage;
