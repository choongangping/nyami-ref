import React, { useState } from 'react';
import styles from './Profile.module.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: '최준혁',
    nickname: '준최',
    location: 'a',
    mbti: 'a',
    introduction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!profile.name) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!profile.nickname) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    // 제출 로직 (예: 서버로 데이터 전송)
    console.log({
      profile,
    });
  };
  return (
    <div>
      <h3 className={styles.title}>프로필</h3>
      <div className={styles.profile}>
        <div className={styles.form}>
          {/* 이름 */}
          <div className={styles.formGroup}>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="이름을 입력하세요"
              value={profile.name}
              onChange={handleChange}
            />
          </div>

          {/* 닉네임 */}
          <div className={styles.formGroup}>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              placeholder="닉네임을 입력하세요"
              value={profile.nickname}
              onChange={handleChange}
            />
          </div>

          {/* 사는 곳 */}
          <div className={styles.formGroup}>
            <label>사는 곳</label>
            <div className={styles.selectGroup}>
              <select
                name="location"
                value={profile.location}
                onChange={handleChange}
              >
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
              <select name="mbti" value={profile.mbti} onChange={handleChange}>
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
              name="introduction"
              placeholder="나를 소개해주세요."
              maxLength={150}
              value={profile.introduction}
              onChange={handleChange}
            ></textarea>
            <span className={styles.charCount}>
              {profile.introduction.length}/150
            </span>
          </div>
          <button className={styles.profileButton} onClick={handleSubmit}>
            등록
          </button>
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
