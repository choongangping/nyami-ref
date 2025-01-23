import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Like.module.css';

const Like = () => {
  const [stores, setStores] = useState([
    { id: 1, storeId: 1, name: '여섬', image: '/path/to/image1.jpg' },
    { id: 2, storeId: 2, name: '두껍다회선생', image: '/path/to/image2.jpg' },
    { id: 3, storeId: 3, name: '플랜터247', image: '/path/to/image3.jpg' },
    { id: 4, storeId: 4, name: '현래장', image: '/path/to/image4.jpg' },
    { id: 5, storeId: 5, name: '쑥스초코파이', image: '/path/to/image5.jpg' },
  ]);

  const navigate = useNavigate(); // 페이지 이동 함수

  // 클릭 핸들러
  const handleCardClick = (storeId) => {
    navigate(`/store/${storeId}`); // 가게 페이지로 이동
  };

  return (
    <div>
      <h3 className={styles.title}>좋아요</h3>
      {/* 좋아요 섹션 */}
      <div className={styles.section}>
        <div className={styles.grid}>
          {stores.map((store) => (
            <div
              key={store.id}
              className={styles.card}
              onClick={() => handleCardClick(store.storeId)} // 클릭 핸들러 연결
            >
              <img src={store.image} alt={store.name} />
              <p>{store.name}</p>
            </div>
          ))}
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
