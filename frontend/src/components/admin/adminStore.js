$(() => {
  // 가게 이름 클릭 시 팝업창 띄우기
  $('.store-link').on('click', function (e) {
    e.preventDefault();
    const storeId = $(this).data('id');
    const review = $(this).data('review');
    getLikeCount(storeId, review);
  });

  // 찜 수를 가져오는 함수
  function getLikeCount(storeId, review) {
    $.ajax({
      url: `/admin/stores/${storeId}/like`,
      type: 'GET',
      success: (likeCount) => {
        getStore(storeId, likeCount, review);
      },
    });
  }

  // 가게 데이터 가져오는 함수
  function getStore(storeId, likeCount, review) {
    $.ajax({
      url: `/admin/stores/${storeId}`,
      type: 'GET',
      success: (store) => {
        renderStorePopup(store, likeCount, review);
        openPopup();
      },
    });
  }

  // 가게 데이터를 팝업에 렌더링
  function renderStorePopup(store, likeCount, review) {
    const storeDOM = `
      <div id="store-content">
        <div className="container">
            <div className="store-header">
                <h2>${store.storeName} </h2>
                <p id="likeButton" className="like-button">❤️ 찜 <span id="likeCount">${likeCount}</p></button>
            </div>

            <!-- 메인 사진 섹션 -->
            <div className="section main-photo">
                <!-- <div className="section-title">가게 메인 사진</div> -->
                <div className="slider-container"> <!-- 슬라이더 컨테이너 추가 -->
                    <div className="slider" id="slider">
                        <div className="slide"><img src="/images/store/${store.mainImage1}" alt="Main Image 1"></div>
                        <div className="slide"><img src="/images/store/${store.mainImage2}" alt="Main Image 2"></div>
                    </div>
                </div>
                <div className="slider-nav">
                    <button aria-label="이전 슬라이드" onClick="moveToMainPhotoSlide(currentSlideIndex - 1)"></button>
                    <button aria-label="다음 슬라이드" onClick="moveToMainPhotoSlide(currentSlideIndex + 1)"></button>
                </div>
                <!-- <div className="store-info">
                    <strong>가게주소:</strong> ${store.address}<br>
                    <strong>상세주소:</strong> ${store.detailAddress}<br>
                    <strong>전화번호:</strong> ${store.tel}<br>
                    <strong>영업시간:</strong> ${store.openTime}<br>
                    <strong>가게설명:</strong> ${store.storeDescription}<br>
                </div> -->
                <div className="store-info">
                    <p><strong>🏠 주소:</strong> ${store.address}, ${store.detailAddress}</p>
                    <div className="store-info-row">
                        <p><strong>📞 Tel:</strong> ${store.tel}</p>
                        <p><strong>⏰ 영업시간:</strong> ${store.openTime}</p>
                    </div>
                    <p><strong>${store.storeDescription}</strong></p>
                </div>
            </div>

            <!-- 대표 메뉴 섹션 -->
            <div className="section menu-price-section">
                <div className="section-title">대표 메뉴</div>
                <c:forEach var="menu" items="{menuList}">
                    <div className="menu-card">
                        <img src="/images/store/${store.menuImage}">
                        <div className="menu-info">
                            <p className="menu-name">${store.menuName}</p>
                            <p className="menu-description">${store.menuDescription}</p>
                            <p className="menu-price">${store.menuPrice}원</p>
                        </div>
                    </div>
                </c:forEach>
            </div>

            <!-- 메뉴 음식 사진 슬라이더 섹션 -->
            <div className="section menu-photo-container">
                <div className="section-title">메뉴 사진 모음</div>
                <div className="menu-slider">
                    <c:forEach var="menu" items="{menuList}">
                        <div className="menu-slide"><img src="/images/store/${store.menuImage}"></div>
                    </c:forEach>
                </div>
                <div className="menu-slider-nav">
                    <button className="prev-button" aria-label="이전 슬라이드">&#10094;</button>
                    <button className="next-button" aria-label="다음 슬라이드">&#10095;</button>
                </div>
            </div>

            <!-- 리뷰 목록 섹션 -->
            <jsp:include page="reviews.jsp" />
        </div>
      </div>
    `;

    if (review) {
      $('#review-content').html(storeDOM);
      $('.popup-content').css({
        width: '1000px',
        height: '80vh',
        'max-height': '80vh',
      });
    } else {
      $('#store-content').html(storeDOM);
    }
  }

  // 가게 게시 상태에 따라 글자색 변경
  const statusColor = {
    active: '#79f',
    inactive: '#f66',
  };

  $('.store-status').each(function () {
    const status = $(this).data('status');
    const color = statusColor[status];
    if (color) {
      $(this).css({
        color: color,
      });
    }
  });

  // 게시글의 게시중단 버튼 클릭
  $('.inactivate-btn').on('click', function () {
    const storeId = $(this).data('id');
    $.ajax({
      url: `/admin/stores/${storeId}/inactivate`,
      type: 'POST',
      success: (result) => {
        const $statusTd = $(`.store-status[data-id="${storeId}"]`);
        $statusTd.text(result).css({
          color: '#f66',
        });
      },
      error: (e) => {
        console.error(e.responseText);
      },
    });
  });

  // 게시글의 재게시 버튼 클릭
  $('.reactivate-btn').on('click', function () {
    const storeId = $(this).data('id');
    $.ajax({
      url: `/admin/stores/${storeId}/reactivate`,
      type: 'POST',
      success: (result) => {
        const $statusTd = $(`.store-status[data-id="${storeId}"]`);
        $statusTd.text(result).css({
          color: '#79f',
        });
      },
      error: (e) => {
        console.error(e.responseText);
      },
    });
  });
});

function openPopup() {
  $('#popup-overlay').css('display', 'flex');
}

function closePopup() {
  $('#popup-overlay').css('display', 'none');
}
