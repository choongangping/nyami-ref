import styles from './Like.module.css';

const Like = () => {
  return (
    <div>
      <h2>좋아요</h2>
      {/* 좋아요 섹션 */}
      <div className={styles.section}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/path/to/image1.jpg" alt="여섬" />
            <p>여섬</p>
          </div>
          <div className={styles.card}>
            <img src="/path/to/image2.jpg" alt="두껍다회선생" />
            <p>두껍다회선생</p>
          </div>
          <div className={styles.card}>
            <img src="/path/to/image3.jpg" alt="플랜터247" />
            <p>플랜터247</p>
          </div>
          <div className={styles.card}>
            <img src="/path/to/image4.jpg" alt="현래장" />
            <p>현래장</p>
          </div>
          <div className={styles.card}>
            <img src="/path/to/image5.jpg" alt="쑥스초코파이" />
            <p>쑥스초코파이</p>
          </div>
        </div>
        {/* 페이지네이션 */}
        <div className={styles.pagination}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </div>
  );
};

export default Like;
