import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="page-name">
        <a href="/">
          <img src={Logo} />
        </a>
      </div>

      <div className="auth-buttons">
        <div className="user-popup-container">
          <a className="link-btn" href="/community">
            커뮤니티
          </a>
          <button className="menu-btn"> ☰ </button>
          <div className="user-popup">
            <span className="welcome-message">
              환영합니다, $sessionMember.nickname님!
            </span>
            <a href="/profile">프로필</a>
            <a href="/mypage">활동내역</a>
            <a href="/account">계정정보</a>
            <a id="open-chat-list">내 채팅</a>
            <form action="/logout" method="post">
              <button type="submit">로그아웃</button>
            </form>
          </div>
        </div>
        <input type="hidden" id="memberId" value="${sessionMember.id}" />
        <input type="hidden" id="nickname" value="${sessionMember.nickname}" />
        <div className="user-popup-container">
          <a className="link-btn" href="/community">
            커뮤니티
          </a>

          <a className="link-btn" href="/login">
            로그인 / 회원가입
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
