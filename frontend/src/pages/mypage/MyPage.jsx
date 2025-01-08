import { Routes, Route, Outlet, Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <>
      {/* Sidebar */}
      <nav>
        <ul>
          <li>
            <Link to="/mypage/activity">Activity</Link>
          </li>
          <li>
            <Link to="/mypage/profile">Profile</Link>
          </li>
          <li>
            <Link to="/mypage/account">Account</Link>
          </li>
        </ul>
      </nav>

      {/* 하위 라우트 렌더링 */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MyPage;
