import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Button from '../components/button/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false,
  };

  const storeList = [
    {
      id: 1,
      name: '타펠룬데 서울 송도점',
      region: '인천 연수구/송도',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract01.jpg',
    },
    {
      id: 2,
      name: '합작',
      region: '경기 수원-광교',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract02.jpg',
    },
    {
      id: 3,
      name: '남기다',
      region: '경기 안양-동안구/평촌',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract03.jpg',
    },
    {
      id: 4,
      name: '그기 부산사상점',
      region: '부산 사상구/덕포',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract04.jpg',
    },
    {
      id: 5,
      name: '영통백합 칼국수 강남점',
      region: '서울, 강남',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract01.jpg',
    },
    {
      id: 6,
      name: '앤딩',
      region: '서울-강북, 충무로',
      imageUrl:
        'https://react-slick.neostack.com/img/react-slick/abstract02.jpg',
    },
  ];

  return (
    <>
      {/* 상단 컨테이너 */}
      <div className={styles.flexContainer}>
        {/* 검색 순위 */}
        <div className={styles.topContent}>
          <h3 className={styles.containerTitle}>실시간 검색 상위</h3>
          <ul className={styles.topSearchStoreList}>
            {storeList.map((store) => (
              <li key={store.id} className={styles.topSearchStore}>
                <Link to="#">{store.name}</Link>
                <p className={styles.storeRegion}>{store.region}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* 슬라이더 */}
        <div className={styles.sliderContainer}>
          <h3 className={styles.containerTitle}>광고</h3>
          <Slider {...settings}>
            {storeList.map((store) => (
              <div key={store.id}>
                <img src={store.imageUrl} alt="" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* 가게 리스트 컨테이너 */}
      <div className={styles.storeContainer}>
        <Button
          onMouseEnter={() => {
            console.log('업종에 마우스 올림');
          }}
          style={{ cursor: 'default' }}
        >
          업종
        </Button>
        <Button
          onClick={() => console.log('지역 클릭')}
          style={{ cursor: 'default', marginLeft: '20px' }}
        >
          지역
        </Button>
        <div className={styles.storeListContainer}>
          {storeList &&
            storeList.length > 0 &&
            storeList.map((store) => (
              <div key={store.id} className={styles.storeList}>
                <Link to={`/store/${store.id}`}>
                  <img
                    className={styles.storeListImage}
                    src={store.imageUrl}
                    alt={`${store.name} 이미지`}
                  />
                </Link>
                <p className={styles.storeListName}>{store.name}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home;
