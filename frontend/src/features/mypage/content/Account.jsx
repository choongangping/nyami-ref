import React, { useState } from 'react';
import styles from './Account.module.css';

const Account = () => {
  const [email, setEmail] = useState('abc@gmail.com');
  const [socialLinks, setSocialLinks] = useState({
    naver: false,
    kakao: true,
    google: false,
  });
  const [isAgreed, setIsAgreed] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 이메일 인증 로직
  const handleEmailVerification = () => {
    console.log(`인증 요청: ${email}`);
    // 이메일 인증 요청 로직 추가
  };

  // 소셜 로그인 로직
  const handleSocialLinkToggle = (platform) => () => {
    setSocialLinks((prevLinks) => ({
      ...prevLinks,
      [platform]: !prevLinks[platform],
    }));
  };

  // 체크박스 핸들러
  const handleAgreementChange = (e) => {
    setIsAgreed(e.target.checked);
  };

  // 탈퇴 로직
  const handleAccountDeletion = () => {
    console.log('삭제요청');
  };
  return (
    <div>
      <h3 className={styles.title}>이메일 정보</h3>
      {/* 이메일 정보 */}
      <div className={styles.section}>
        <div className={styles.emailInfo}>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={styles.emailInput}
          />
          <button
            onClick={handleEmailVerification}
            className={styles.emailButton}
          >
            이메일 인증
          </button>
        </div>
        <p className={styles.infoText}>
          이메일 변경은 변경한 이메일로 인증 요청 메일이 발송되고 해당 이메일을
          통해 인증을 정상적으로 완료한 후 최종적으로 반영됩니다.
        </p>
      </div>

      {/* 소셜 계정 연동 */}
      <div className={styles.section}>
        <h3>소셜계정 연동</h3>
        <p className={styles.infoText}>
          사용하시는 소셜 및 인증 제공자들과 계정을 연동하고 손쉽게
          로그인하세요.
        </p>
        <div className={styles.socialButtons}>
          <button
            onClick={handleSocialLinkToggle('naver')}
            className={`${styles.socialButton} ${
              socialLinks.naver ? styles.active : styles.inactive
            }`}
          >
            {socialLinks.naver ? '네이버 연동 해제' : '네이버 연동하기'}
          </button>
          <button
            onClick={handleSocialLinkToggle('kakao')}
            className={`${styles.socialButton} ${
              socialLinks.kakao ? styles.active : styles.inactive
            }`}
          >
            {socialLinks.kakao ? '카카오 연동 해제' : '카카오 연동하기'}
          </button>
          <button
            onClick={handleSocialLinkToggle('google')}
            className={`${styles.socialButton} ${
              socialLinks.google ? styles.active : styles.inactive
            }`}
          >
            {socialLinks.google ? '구글 연동 해제' : '구글 연동하기'}
          </button>
        </div>
      </div>

      {/* 계정 삭제 */}
      <div className={styles.section}>
        <h3>계정삭제</h3>
        <div className={styles.deleteBox}>
          <p className={styles.infoText}>
            회원 탈퇴일로부터 계정과 닉네임을 포함한 계정
            정보(아이디/이메일/닉네임)는{' '}
            <a href="/terms" className={styles.link}>
              개인정보 처리방침
            </a>
            에 따라 60일간 보관(잠금)되며, 60일 경과 후에는 모든 개인 정보는
            완전히 삭제되며 더 이상 복구할 수 없게 됩니다. 작성된 게시물은
            삭제되지 않으며, 익명처리 후 OKKY 소유권이 귀속됩니다.
          </p>
        </div>
        <div className={styles.deleteAccount}>
          <label>
            <input type="checkbox" onChange={handleAgreementChange} />
            계정 삭제에 관한 정책을 읽고 이에 동의합니다.
          </label>
          <button
            className={styles.deleteButton}
            onClick={handleAccountDeletion}
            disabled={!isAgreed} // 동의하지 않으면 비활성화
          >
            회원탈퇴
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
