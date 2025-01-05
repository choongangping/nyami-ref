const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="customer-center">
          <p>평일: 전체 문의 상담</p>
          <p>토요일: 제휴 가게 신청 상담</p>
          <p>일요일: 휴무</p>
          <p>09:00 - 18:00</p>
          <button>카카오톡 상담</button>
          <button>이메일 문의</button>
        </div>
        <div className="company-links">
          <ul>
            <li>
              <a href="/support">고객센터</a>
            </li>
            <li>
              <a href="/terms">이용 약관</a>
            </li>
            <li>
              <a href="/storeRegistration">사업자 가게 등록</a>
            </li>
            <li>
              <a href="/noticeList">공지 사항</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024. , Nyaminyami Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
