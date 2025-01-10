import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  const [user, setUser] = useState(false);
  const { pathname: currentPath } = useLocation();

  const loggedInLinks = [
    { path: 'mypage/profile', label: '프로필' },
    { path: 'mypage/account', label: '계정 정보' },
    { path: 'mypage/like', label: '좋아요 내역' },
    { path: 'mypage/review', label: '리뷰 내역' },
    { path: '/logout', label: '로그아웃' },
  ];

  const loggedOutLinks = [
    { path: '/login', label: '로그인' },
    { path: '/signup', label: '회원가입' },
  ];

  const navLinks = user ? loggedInLinks : loggedOutLinks;

  const handleMenuToggle = () => {
    console.log('상단바 버튼 클릭');
  };

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.mainLogo} src={Logo} alt="로고 이미지" />
      </Link>
      <div>
        {user && (
          <button
            className={styles.menuBtn}
            aria-label="메뉴 열기"
            onClick={handleMenuToggle}
          >
            ☰
          </button>
        )}
        {navLinks.map(({ path, label }) => (
          <Link
            to={path}
            key={path}
            aria-current={currentPath === path ? 'page' : undefined}
            onClick={(e) => {
              if (label === '로그아웃') {
                e.preventDefault();
                setUser(false);
              } else if (label === '로그인') {
                e.preventDefault();
                setUser(true);
              }
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
