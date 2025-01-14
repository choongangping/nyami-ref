import styles from './Account.module.css';

const Account = () => {
  return (
    <div>
      <h3 className={styles.title}>이메일 정보</h3>
      {/* 이메일 정보 */}
      <div className={styles.section}>
        <div className={styles.emailInfo}>
          <input
            type="email"
            defaultValue="whdid3766@gmail.com"
            readOnly
            className={styles.emailInput}
          />
          <button className={styles.emailButton}>이메일 인증</button>
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
          <button className={styles.socialButton}>네이버 연동하기</button>
          <button className={styles.socialButton}>카카오 연동하기</button>
          <button className={styles.socialButton}>구글 연동하기</button>
        </div>
      </div>

      {/* 계정 삭제 */}
      <div className={styles.section}>
        <h3>계정삭제</h3>
        <div className={styles.deleteBox}>
          <p className={styles.infoText}>
            회원 탈퇴일로부터 계정과 닉네임을 포함한 계정
            정보(아이디/이메일/닉네임)는 <a href="#">개인정보 처리방침</a>에
            따라 60일간 보관(잠금)되며, 60일 경과 후에는 모든 개인 정보는 완전히
            삭제되며 더 이상 복구할 수 없게 됩니다. 작성된 게시물은 삭제되지
            않으며, 익명처리 후 OKKY 소유권이 귀속됩니다.
          </p>
        </div>
        <div className={styles.deleteAccount}>
          <label>
            <input type="checkbox" />
            계정 삭제에 관한 정책을 읽고 이에 동의합니다.
          </label>
          <button className={styles.deleteButton}>회원탈퇴</button>
        </div>
      </div>
    </div>
  );
};

export default Account;
