import './StoreRegistrationForm.css';

const StoreRegistrationForm = () => {
  return (
    <div className="container">
      <h2>사업자 가게 등록</h2>
      <p>가게 정보를 입력해 주세요. 검토 후 등록이 승인됩니다.</p>

      <form className="store-registration-form" id="storeRegistrationForm" method="post">
        <input type="hidden" id="hiddenIndustry" name="industry" value="" />
        <input type="hidden" id="hiddenSubCategory" name="subcategory" value="" />
        <input type="hidden" id="hiddenThemes" name="theme" value="" />

        <label for="location">지역</label>
        <select id="location" name="location">
          <option value="">지역을 선택하세요</option>
          <option value="마포구">마포구</option>
          <option value="송파구">송파구</option>
          <option value="강남/서초구">강남/서초구</option>
          <option value="성북/종로구">성북/종로구</option>
          <option value="광진/성동구">광진/성동구</option>
        </select>
        <span id="location-message"></span>

        <label for="storeName">가게 이름</label>
        <input type="text" id="storeName" name="storeName" />
        <span id="storeName-message"></span>

        <label for="ceoName">대표자 이름</label>
        <input type="text" id="ceoName" name="ceoName" />
        <span id="ceoName-message"></span>

        <label for="tel">연락처</label>
        <input type="tel" id="tel" name="tel" placeholder="예: 02-1234-5678" />
        <span id="tel-message"></span>

        <label for="address">가게 주소</label>
        <div className="address-container">
          <input type="text" id="address" name="address" placeholder="도로명 주소" readOnly />
          <button type="button" className="address-search-btn" onClick="openAddressPopup()">
            주소 검색
          </button>
          <input type="text" id="detailAddress" name="detailAddress" placeholder="상세 주소" />
        </div>
        <span id="address-message"></span>

        <label>업종 및 테마 선택</label>
        <div id="categoryPopup" className="category-popup">
          <div className="category-step">
            <h3>업종</h3>
            <button type="button" className="industry-btn" data-industry="음식점" onClick="selectIndustry('음식점')">
              음식점
            </button>
            <button type="button" className="industry-btn" data-industry="카페" onClick="selectIndustry('카페')">
              카페
            </button>
            <button type="button" className="industry-btn" data-industry="술집" onClick="selectIndustry('술집')">
              술집
            </button>
          </div>

          <div id="selectedIndustryOptions" className="selected-industry-options"></div>

          <div className="category-step" id="themeStep">
            <h3>테마</h3>
            <button type="button" className="theme-btn" data-theme="혼밥" onClick="selectTheme('혼밥')">
              혼밥
            </button>
            <button type="button" className="theme-btn" data-theme="데이트" onClick="selectTheme('데이트')">
              데이트
            </button>
            <button type="button" className="theme-btn" data-theme="친구" onClick="selectTheme('친구')">
              친구
            </button>
            <button type="button" className="theme-btn" data-theme="회식" onClick="selectTheme('회식')">
              회식
            </button>
          </div>
        </div>
        <span id="category-message"></span>

        <label for="openTime">영업 시간</label>
        <input type="text" id="openTime" name="openTime" placeholder="예: 09:00 - 22:00" />
        <span id="openTime-message"></span>

        <label for="storeDescription">가게 설명</label>
        <textarea id="storeDescription" name="storeDescription" maxlength="500" placeholder="가게에 대한 간단한 설명을 입력해 주세요."></textarea>
        <div className="char-limit">
          <div className="char-count"></div>자 / 최대 500자
        </div>
        <span id="storeDescription-message"></span>

        <label for="storePhotos">가게 대표 사진 (최대 2개)</label>
        <input type="file" id="storePhotos" name="storePhotos" multiple accept="image/*" />
        <div id="storePhotosNames" className="file-names"></div>
        <span id="storePhotos-message"></span>

        <label for="menuPhotos">대표 메뉴 사진 (최대 4개)</label>
        <input type="file" id="menuPhotos" name="menuPhotos" multiple accept="image/*" />
        <div id="menuPhotosNames" className="file-names"></div>
        <span id="menuPhotos-message"></span>

        <div className="consent-section">
          <label>
            {' '}
            <input className="consent" type="checkbox" /> 정보 수집 및 이용 동의{' '}
          </label>
          <p className="consent-text">개인정보는 가게 등록 검토를 위해서만 사용되며, 등록 후 1개월 이내에 파기됩니다.</p>
        </div>

        <button type="submit" className="submit-btn">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default StoreRegistrationForm;
