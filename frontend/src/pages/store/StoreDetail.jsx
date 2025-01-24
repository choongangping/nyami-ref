import { useState } from 'react';
import styles from './StoreDetail.module.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { PiShareBold } from 'react-icons/pi';
import Slider from 'react-slick';

const StoreDetail = () => {
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태

  // 좋아요 상태를 업데이트하는 함수
  function updateLikeState() {
    setIsLiked((prev) => !prev);
  }

  // 슬라이더 속성
  const storeSettings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
  };

  const menuSettings = {
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
  };

  // 가게 이미지 배열
  const storeImageList = [
    {
      id: 1,
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract01.jpg',
    },
    {
      id: 2,
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract02.jpg',
    },
    {
      id: 3,
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract03.jpg',
    },
    {
      id: 4,
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract04.jpg',
    },
  ];

  // 메뉴 이미지 배열
  const menuImageList = [
    {
      id: 1,
      imageUrl:
        'https://blog.kakaocdn.net/dn/cICerT/btsII0BWx1X/dvYrTQKNdnKKuXcGWjcDK1/img.png',
    },
    {
      id: 2,
      imageUrl: 'https://img.siksinhot.com/article/1731376728963013.jpeg',
    },
    {
      id: 3,
      imageUrl: 'https://img.siksinhot.com/article/1731376729504014.jpeg',
    },
    {
      id: 4,
      imageUrl: 'https://img.siksinhot.com/article/1731376729983015.jpeg',
    },
    {
      id: 5,
      imageUrl: 'https://img.siksinhot.com/article/1731376730473016.jpeg',
    },
    {
      id: 6,
      imageUrl: 'https://img.siksinhot.com/article/1731376730891017.jpeg',
    },
  ];

  return (
    <>
      {/* breadcrumb */}
      <div className={styles.breadcrumb}>
        <span>일식</span>
        <span> &gt; </span>
        <span>보길</span>
      </div>

      {/* 가게 컨테이너 */}
      <div className={styles.storeContainer}>
        {/* 가게 제목 섹션 */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>보길</h2>
          <div className={styles.action}>
            <div className={styles.likeBtn} onClick={updateLikeState}>
              {isLiked ? (
                <FaHeart size="25" color="#ff8484" />
              ) : (
                <FaRegHeart size="25" />
              )}
            </div>
            <div className={styles.shareBtn}>
              <PiShareBold size="25" />
            </div>
          </div>
        </div>

        {/* 가게 사진 슬라이더 */}
        <div className={styles.imageSliderWrapper}>
          {storeImageList && storeImageList.length > 0 && (
            <Slider {...storeSettings}>
              <h3>가게 사진 슬라이더</h3>
              {storeImageList.map((storeImage) => (
                <div key={storeImage.id} className={styles.storeImage}>
                  <img
                    src={storeImage.imageUrl}
                    alt={`가게 사진 ${storeImage.id}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className={styles.line}></div>

        {/* 가게 상세 파트 */}
        <div className={styles.descriptionWrapper}>
          <p>
            <strong>🏠 주소:</strong> 서울특별시 송파구 오금로16길 10-8, 1층
            보길
          </p>
          <div>
            <p>
              <strong>📞 Tel:</strong> 010-0101-1010
            </p>
            <p>
              <strong>⏰ 영업시간:</strong> 미정
            </p>
          </div>
          <p className={styles.description}>
            aespa, ‘Supernova’로 선사할 다중우주 세계관+폭발적 ‘쇠맛 매력’!
            히트메이커 KENZIE 참여로 완성도 UP! 첫 정규 ‘Armageddon’으로 이어질
            대서사의 시작! ‘글로벌 히트메이커’ aespa가 더블 타이틀 곡
            ‘Supernova’로 폭발적인 에너지를 선사한다. 오는 27일 베일을 벗는 정규
            앨범 ‘Armageddon’ 발매에 앞서 공개되는 ‘Supernova’는 이번 앨범의
            더블 타이틀 곡 중 하나로 히트메이커 KENZIE가 작사, 작곡에
            참여했으며, 무게감 있는 킥과 베이스 기반의 미니멀한 트랙 사운드가
            인상적인 댄스곡으로, 캐치한 탑라인과 신스 멜로디가 매력적이다. 또한
            가사에는 다른 차원의 문이 열리는 사건의 시작을 초신성에 빗대어 aespa
            세계관 시즌 2의 본격적인 스토리텔링을 예고, 내 안의 대폭발이
            시작되었음을 힙한 무드로 표현해 aespa 특유의 ‘쇠맛’ 매력을
            만끽하기에 충분하다. 5월 27일 발매되는 aespa 첫 정규 앨범
            ‘Armageddon’은 더블 타이틀 곡 ‘Armageddon’과 ‘Supernova’를 비롯한
            다양한 장르의 총 10곡으로 구성되어 있으며, 리얼 월드와 디지털 세계를
            넘어 다중 우주로 확장되는 aespa 세계관 시즌 2의 서사까지 담아, 한층
            깊어진 aespa의 음악 세계와 독보적인 콘셉트를 만날 수 있다.
          </p>
        </div>

        {/* 메뉴 사진 슬라이더 */}
        <div className={styles.imageSliderWrapper}>
          {menuImageList && menuImageList.length > 0 && (
            <Slider {...menuSettings}>
              <h3>
                <strong>메뉴 사진 슬라이더</strong>
              </h3>
              {menuImageList.map((menuImage) => (
                <div key={menuImage.id}>
                  <img
                    src={menuImage.imageUrl}
                    className={styles.menuImage}
                    alt={`메뉴 ${menuImage.id}`}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className={styles.line}></div>

        {/* 지도 */}
        <div className={styles.mapContainer}>Map</div>
      </div>
    </>
  );
};

export default StoreDetail;
