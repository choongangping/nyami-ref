import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Button from '../components/button/Button';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Home.module.css';
import BasicDropdown from '../components/dropdown/BasicDropdown';
import Tag from '../components/tag/Tag';

const Home = () => {
  const [local, setLocal] = useState(''); // 지역 상태
  const [foodCategory, setFoodCategory] = useState(''); // 업종 상태
  const [theme, setTheme] = useState(''); // 테마 상태
  const [isLocalOpen, setIsLocalOpen] = useState(false); // 지역 드롭다운 열림 상태
  const [isFoodCategoryOpen, setIsFoodCategoryOpen] = useState(false); // 업종 드롭다운 열림 상태
  const [isThemeOpen, setIsThemeOpen] = useState(false); // 테마 드롭다운 열림 상태
  const localDropdownRef = useRef(null); // 지역 드롭다운 참조
  const localButtonRef = useRef(null); // 지역 버튼 참조
  const foodCategoryDropdownRef = useRef(null); // 업종 드롭다운 참조
  const foodCategoryButtonRef = useRef(null); // 업종 버튼 참조
  const themeDropdownRef = useRef(null); // 테마 드롭다운 참조
  const themeButtonRef = useRef(null); // 테마 버튼 참조

  // 초기 카테고리 값 설정
  useEffect(() => {
    setLocal('강남');
    setFoodCategory('한식');
    setTheme('데이트 코스');
  }, []);

  // 지역 드롭다운 토글
  const toggleLocalDropdown = () => {
    setIsLocalOpen(!isLocalOpen);
  };

  // 업종 드롭다운 토글
  const toggleFoodCategoryDropdown = () => {
    setIsFoodCategoryOpen(!isFoodCategoryOpen);
  };

  // 테마 드롭다운 토글
  const toggleThemeDropdown = () => {
    setIsThemeOpen(!isThemeOpen);
  };

  // 지역 변경
  const handleLocalChange = (value) => {
    console.log(`지역 선택: ${value}`);
    setLocal(value);
    setIsLocalOpen(false);
  };

  // 업종 변경
  const handleFoodCategoryChange = (value) => {
    console.log(`업종 선택: ${value}`);
    setFoodCategory(value);
    setIsFoodCategoryOpen(false);
  };
  // 테마 변경
  const handleThemeChange = (value) => {
    console.log(`테마 선택: ${value}`);
    setTheme(value);
    setIsThemeOpen(false);
  };

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

  const localData = [
    { id: 1, content: '강남' },
    { id: 2, content: '성수' },
    { id: 3, content: '홍대' },
    { id: 4, content: '명동' },
    { id: 5, content: '마포' },
  ];

  const foodCategoryData = [
    { id: 1, content: '한식' },
    { id: 2, content: '중식' },
    { id: 3, content: '일식' },
    { id: 4, content: '양식' },
    { id: 5, content: '분식' },
  ];

  const themeData = [
    { id: 1, content: '혼밥하기 좋은' },
    { id: 2, content: '데이트 코스' },
    { id: 3, content: '회식' },
    { id: 4, content: '분위기 있는' },
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
        {/* 카테고리 버튼 */}
        <div className={styles.categoryButtonWrapper}>
          <Button
            onClick={() => {
              console.log('지역 버튼 클릭');
              toggleLocalDropdown();
            }}
            ref={localButtonRef}
          >
            지역
          </Button>
          <BasicDropdown
            isOpen={isLocalOpen}
            onClose={toggleLocalDropdown}
            dropdownRef={localDropdownRef}
            buttonRef={localButtonRef}
          >
            {localData.map((data) => {
              return (
                <Link
                  key={data.id}
                  onClick={() => handleLocalChange(data.content)}
                >
                  {data.content}
                </Link>
              );
            })}
          </BasicDropdown>

          <Button
            onClick={() => {
              console.log('업종 버튼 클릭');
              toggleFoodCategoryDropdown();
            }}
            ref={foodCategoryButtonRef}
            style={{ marginLeft: '20px' }}
          >
            업종
          </Button>
          <BasicDropdown
            isOpen={isFoodCategoryOpen}
            onClose={toggleFoodCategoryDropdown}
            dropdownRef={foodCategoryDropdownRef}
            buttonRef={foodCategoryButtonRef}
          >
            {foodCategoryData.map((data) => {
              return (
                <Link
                  key={data.id}
                  onClick={() => handleFoodCategoryChange(data.content)}
                >
                  {data.content}
                </Link>
              );
            })}
          </BasicDropdown>

          <Button
            onClick={() => {
              console.log('테마 버튼 클릭');
              toggleThemeDropdown();
            }}
            ref={themeButtonRef}
            style={{ marginLeft: '20px' }}
          >
            테마
          </Button>
          <BasicDropdown
            isOpen={isThemeOpen}
            onClose={toggleThemeDropdown}
            dropdownRef={themeDropdownRef}
            buttonRef={themeButtonRef}
          >
            {themeData.map((data) => {
              return (
                <Link
                  key={data.id}
                  onClick={() => handleThemeChange(data.content)}
                >
                  {data.content}
                </Link>
              );
            })}
          </BasicDropdown>
        </div>
        {/* 태그 */}
        <div className={styles.tagContainer}>
          <Tag>{local}</Tag>
          <Tag>{foodCategory}</Tag>
          <Tag>{theme}</Tag>
        </div>
        {/* 가게 리스트 컨테이너 */}
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
