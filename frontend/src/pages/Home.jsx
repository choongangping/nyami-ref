// CSS
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="filter-container">
        <div className="location-dropdown">
          <button className="location-btn" id="location-btn">
            지역 선택
          </button>
          <div className="location-menu">
            <a href="#" onClick="filterByLocation('ALL', '지역 선택')">
              지역 선택
            </a>
            <a href="#" onClick="filterByLocation('마포구', '마포구')">
              마포구
            </a>
            <a href="#" onClick="filterByLocation('송파구', '송파구')">
              송파구
            </a>
            <a href="#" onClick="filterByLocation('강남/서초구', '강남/서초구')">
              강남/서초구
            </a>
            <a href="#" onClick="filterByLocation('성북/종로구', '성북/종로구')">
              성북/종로구
            </a>
            <a href="#" onClick="filterByLocation('광진/성동구', '광진/성동구')">
              광진/성동구
            </a>
          </div>
        </div>
      </div>

      <div className="main-banner">
        <div className="slider-container">
          <div className="slide">
            <img src="/images/home/모수 긴 화면 2.png" alt="슬라이드 1 이미지" className="slide-image" />
          </div>
          <div className="slide">
            <img src="/images/home/티엔미미1.jpg" alt="슬라이드 2 이미지" className="slide-image" />
          </div>
          <div className="slide">
            <img src="/images/home/juicy-and-chewy-chuck.jpg" alt="슬라이드 2 이미지" className="slide-image" />
          </div>
          <div className="slide">
            <img src="/images/home/galbi.jpg" alt="슬라이드 2 이미지" className="slide-image" />
          </div>
        </div>

        <div className="slide-buttons">
          <button onClick="moveToSlide(0)" className="active"></button>
          <button onClick="moveToSlide(1)"></button>
          <button onClick="moveToSlide(2)"></button>
          <button onClick="moveToSlide(3)"></button>
        </div>
      </div>

      <div className="category-select-container">
        <button className="category-select-btn" onClick="toggleCategoryPopup()">
          카테고리 선택
        </button>

        <div id="categoryPopup" className="category-popup" style={{ display: 'none' }}>
          <div className="category-step">
            <h3>업종 선택</h3>
            <button onClick="selectIndustry('음식점')">🍽️ 음식점</button>
            <button onClick="selectIndustry('카페')">☕ 카페</button>
            <button onClick="selectIndustry('술집')">🥂 술집</button>
          </div>
          <div id="selectedIndustryOptions" className="category-step" style={{ display: 'none' }}></div>
          <div className="category-step" id="themeStep">
            <h3>테마 선택</h3>
            <button onClick="selectTheme('혼밥')">🧑‍ 혼밥</button>
            <button onClick="selectTheme('데이트')">💑 데이트</button>
            <button onClick="selectTheme('친구')">👭 친구</button>
            <button onClick="selectTheme('회식')">🍻 회식</button>
          </div>
          <button className="search-btn" id="searchBtn">
            검색
          </button>
          <button className="reset-btn" id="resetBtn">
            초기화
          </button>
        </div>
      </div>

      <div className="orderby-criteria">
        <select id="orderOptions" onChange="orderOptionChoice()">
          <option value="">정렬</option>
          <option value="likes" id="likes">
            좋아요순
          </option>
          <option value="reviews" id="reviews">
            댓글순
          </option>
        </select>
      </div>

      <div className="store-container">
        <div id="store-list-container" className="store-list">
          <div className="store-item-box">
            <div className="store-item">
              <a href="/storeDetail?store_ID=${store.id}">
                <img src="<c:url value='/images/store/${store.mainImage1}' />" alt="${store.storeName} 이미지" />
              </a>
            </div>
            <div className="store-name">$store.storeName</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
