import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <h2>프로필</h2>
      <div className={styles.profile}>
        <div className={styles.form}>
          {/* 이름 */}
          <div className={styles.formGroup}>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              type="text"
              placeholder="이름을 입력하세요"
              defaultValue="최준혁"
            />
          </div>

          {/* 닉네임 */}
          <div className={styles.formGroup}>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              type="text"
              placeholder="닉네임을 입력하세요"
              defaultValue="준최"
            />
          </div>

          {/* 사는 곳 */}
          <div className={styles.formGroup}>
            <label>사는 곳</label>
            <div className={styles.selectGroup}>
              <select defaultValue="a">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>
          </div>

          {/* mbti */}
          <div className={styles.formGroup}>
            <label>MBTI</label>
            <div className={styles.selectGroup}>
              <select defaultValue="a">
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </div>
          </div>

          {/* 한 줄 소개 */}
          <div className={styles.formGroup}>
            <label htmlFor="introduction">한 줄 소개</label>
            <textarea
              id="introduction"
              placeholder="나를 소개해주세요."
              maxLength={150}
            ></textarea>
            <span className={styles.charCount}>0/150</span>
          </div>
        </div>

        {/* 프로필 이미지 */}
        <div className={styles.profileImage}>
          <img src="/path/to/profile-image.png" alt="프로필 이미지" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
