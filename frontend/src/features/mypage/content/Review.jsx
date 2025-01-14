import styles from './Review.module.css';

const Review = () => {
  const reviews = [
    {
      storename: '명륜진사갈비',
      rating: 5.0,
      title: '고기가 사진과 다르면 어쩌지? 이런 생각이 들었는데...',
      content:
        '다 굽고 나서 먹어보니 괜한 걱정을 했구나 생각했습니다. 과장이 아니라 정말 맛있었어요. 구매 고민이신 분들 그냥 주문하세요~',
      image: '/path/to/image1.jpg',
    },
    {
      storename: '맥도날드',
      rating: 5.0,
      title: '양념 맛집이라고 워낙 유명해서 속는 셈치고 구매했는데',
      content:
        '앞으로 여기거 자주 시킬 예정입니다. 맛뿐만 아니라 양도 푸짐해서 아이들이 가게에서 사먹는 것 보다 훨씬 낫다고 그러네요! 외식값 굳었습니다ㅎㅎ',
      image: '/path/to/image2.jpg',
    },
    {
      storename: 'BHC치킨',
      rating: 5.0,
      title: '갈비는 양념 맛이 중요한데, 입맛에 안 맞으면 어쩌지?',
      content:
        '했는데, 좋은 재료로 만든다는 게 거짓 광고가 아니었네요. 너무 자극적이지도 않으면서 고기 맛 아는 그 맛에서 더더더 맛있었어요!',
      image: '/path/to/image3.jpg',
    },
  ];
  return (
    <div>
      <h3 className={styles.title}>리뷰</h3>
      {/* 리뷰 섹션 */}
      <div className={styles.section}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.header}>
              <span className={styles.storename}>{review.storename}</span>
              <span className={styles.rating}>
                {'⭐'.repeat(review.rating)}
              </span>
            </div>
            <div className={styles.content}>
              <img src={review.image} alt="사진" className={styles.image} />
              <div className={styles.text}>
                <h4 className={styles.reviewTitle}>{review.title}</h4>
                <p className={styles.reviewContent}>{review.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
