import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-content']}>
        <div className={styles['customer-center']}>
          <p>평일: 전체 문의 상담</p>
          <p>토요일: 제휴 가게 신청 상담</p>
          <p>일요일: 휴무</p>
          <p>09:00 - 18:00</p>
          <button>카카오톡 상담</button>
          <button>이메일 문의</button>
        </div>
        <div className={styles['company-links']}>
          <ul>
            <li>
              <Link to="/support">고객센터</Link>
            </li>
            <li>
              <Link to="/terms">이용약관</Link>
            </li>
            <li>
              <Link to="/terms">임시</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <p>Copyright 2025. , Nyami Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
