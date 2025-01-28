import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Header.module.css';
import Logo from '../../assets/images/logo.png';
import BasicDropdown from '../dropdown/BasicDropdown';
import { GoBellFill } from 'react-icons/go';
import { RxHamburgerMenu } from 'react-icons/rx';

const Header = () => {
  const navigator = useNavigate();
  const [user, setUser] = useState(null); // 로그인 유저 상태
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 메뉴 드롭다운 열림 상태
  const menuDropdownRef = useRef(null); // 메뉴 드롭다운 참조
  const menuButtonRef = useRef(null); // 메뉴 버튼 참조
  const [isAlertOpen, setIsAlertOpen] = useState(false); // 알림 드롭다운 열림 상태
  const alertDropdownRef = useRef(null); // 알림 드롭다운 참조
  const alertButtonRef = useRef(null); // 알림 버튼 참조

  useEffect(() => {
    const handleUser = () => {
      // 로컬 스토리지에서 로그인 유저 정보 가져오기
      const user = localStorage.getItem('user');
      setUser(user);
    };
    handleUser();
  });

  // 알림 내용
  const alertContent = [
    { id: 1, content: '새로운 게시글 등록' },
    { id: 2, content: '내가 쓴 리뷰 5개 이상' },
    { id: 3, content: '1000+ 조회수' },
    { id: 4, content: '500+ 좋아요' },
    { id: 5, content: '500+ 댓글' },
    { id: 6, content: '2000+ 조회수' },
    { id: 7, content: '1000+ 좋아요' },
  ];

  // 인증 사용자 메뉴
  const loggedInLinks = [
    { path: 'mypage/profile', label: '프로필' },
    { path: 'mypage/account', label: '계정 정보' },
    { path: 'mypage/like', label: '좋아요 내역' },
    { path: 'mypage/review', label: '리뷰 내역' },
    { path: '/logout', label: '로그아웃' },
  ];

  // 미인증 사용자 메뉴
  const nonLoggedInLinks = [
    { path: '/login', label: '로그인' },
    { path: '/signup', label: '회원가입' },
  ];

  // 메뉴 드롭다운 토글
  const handleMenuDropdown = () => {
    console.log('상단바 메뉴 버튼 클릭');
    setIsMenuOpen((prev) => !prev);
  };

  // 메뉴 드롭다운 닫기
  const closeMenuDropdown = () => {
    setIsMenuOpen(false);
  };

  // 알림 드롭다운 토글
  const handleAlertDropdown = () => {
    console.log('상단바 알림 버튼 클릭');
    setIsAlertOpen((prev) => !prev);
  };

  // 알림 드롭다운 닫기
  const closeAlertDropdown = () => {
    setIsAlertOpen(false);
  };

  return (
    <header className={styles.headerContainer}>
      <Link to="/">
        <img className={styles.mainLogo} src={Logo} alt="로고 이미지" />
      </Link>
      {user ? (
        // 로그인 메뉴
        <div className={styles.menuContainer}>
          <div className={styles.containerWrapper}>
            {/* 아이콘 */}
            <GoBellFill
              className={styles.headerIcon}
              ref={alertButtonRef}
              onClick={handleAlertDropdown}
            />
            {/* 알림 드롭다운 */}
            <BasicDropdown
              isOpen={isAlertOpen}
              onClose={closeAlertDropdown}
              dropdownRef={alertDropdownRef}
              buttonRef={alertButtonRef}
            >
              {alertContent.map((alert) => {
                return (
                  <Link key={alert.id} to={`/${alert.id}`}>
                    {alert.content}
                  </Link>
                );
              })}
            </BasicDropdown>
          </div>

          <div className={styles.containerWrapper}>
            <RxHamburgerMenu
              className={styles.headerIcon}
              ref={menuButtonRef}
              onClick={handleMenuDropdown}
            />
            {/* 메뉴 드롭다운 */}
            <BasicDropdown
              isOpen={isMenuOpen}
              onClose={closeMenuDropdown}
              dropdownRef={menuDropdownRef}
              buttonRef={menuButtonRef}
            >
              {loggedInLinks.map((link) => {
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={(e) => {
                      if (link.label === '로그아웃') {
                        e.preventDefault();
                        localStorage.removeItem('user');
                        alert('로그아웃');
                        navigator('/');
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </BasicDropdown>
          </div>
        </div>
      ) : (
        // 비로그인 메뉴
        <div className={styles.menuContainer}>
          {nonLoggedInLinks.map((link) => (
            <Link to={link.path} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
