import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import StoreFilter from '../features/store/StoreFilter';
import StoreList from '../features/store/StoreList';
import styles from './Home.module.css';

const Home = () => {
  const [local, setLocal] = useState(''); // 지역 상태
  const [foodCategory, setFoodCategory] = useState(''); // 업종 상태
  const [theme, setTheme] = useState(''); // 테마 상태
  const [sort, setSort] = useState(''); // 정렬 상태

  // 슬라이더 설정
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

      {/* 가게 컨테이너 */}
      <div className={styles.storeContainer}>
        <StoreFilter
          local={local}
          foodCategory={foodCategory}
          theme={theme}
          sort={sort}
          onLocalChange={setLocal}
          onFoodCategoryChange={setFoodCategory}
          onThemeChange={setTheme}
          onSortChange={setSort}
        />

        {/* 가게 리스트 컨테이너 */}
        <StoreList
          local={local}
          foodCategory={foodCategory}
          theme={theme}
          sort={sort}
        />
      </div>
    </>
  );
};

export default Home;
