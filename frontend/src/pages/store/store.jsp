<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %> <!-- 한글 인코딩 -->
<%@ page import="java.net.URLEncoder" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

    
<!DOCTYPE html>
<html lang="ko">

<head>
    <jsp:include page="/WEB-INF/views/templates/head.jsp" /> <!-- header -->
	
    <title>가게 상세페이지</title>
    <link rel="stylesheet" type="text/css" href="/css/store/store.css">
   

    <!-- JavaScript에서 사용할 memberId와 storeId -->
    <script type="text/javascript">
	    var memberId = ${sessionMember.id != null ? sessionMember.id : 'null'}
	    var storeId = ${storeId}
        var latitude = ${storeDetail.latitude != null ? storeDetail.latitude : '37.5665'}
        var longitude = ${storeDetail.longitude != null ? storeDetail.longitude : '126.9780'}
        
        console.log("memberId:", memberId);
        console.log("storeId:", storeId);
        console.log("latitude:", latitude);
        console.log("longitude:", longitude);
    </script>
    
</head>

<body>
    <jsp:include page="/WEB-INF/views/templates/header.jsp" /> <!-- header -->

    <c:if test="${not empty pointMessage}">
        <script>
            alert("${pointMessage}");
        </script>
    </c:if>

    <c:if test="${not empty duplicateReviewMessage}">
        <script>alert("${duplicateReviewMessage}");</script>
    </c:if>

    <main> <!-- main content start -->
        
    <!-- 이동경로 -->
<div className="breadcrumb">
    <!-- 업종 정보 -->
    <c:choose>
        <c:when test="${not empty categoryList[0].industry}">
            <span className="breadcrumb-item">
                ${categoryList[0].industry}
            </span>
        </c:when>
        <c:otherwise>
            <span className="breadcrumb-item">업종 정보 없음</span>
        </c:otherwise>
    </c:choose>

    <span className="breadcrumb-separator">›</span>
    
    <!-- 가게 이름 -->
    <c:choose>
        <c:when test="${not empty storeDetail.storeName}">
            <span className="breadcrumb-current">${storeDetail.storeName}</span>
        </c:when>
        <c:otherwise>
            <span className="breadcrumb-current">가게 이름 없음</span>
        </c:otherwise>
    </c:choose>
</div>


        <!-- 가게 이름과 찜 버튼 -->
        <div className="container">
            <div className="store-header">
                <h2>${storeDetail.storeName} </h2>
                <button id="likeButton" className="like-button">❤️ 찜하기 <span id="likeCount">${memberLike.likeCount}</span></button>
            </div>

            <!-- 메인 사진 섹션 -->
            <div className="section main-photo">
                <!-- <div className="section-title">가게 메인 사진</div> -->
                <div className="slider-container"> <!-- 슬라이더 컨테이너 추가 -->
                    <div className="slider" id="slider">
                        <div className="slide"><img src="${storeDetail.mainImage1}" alt="Main Image 1"></div>
                        <div className="slide"><img src="${storeDetail.mainImage2}" alt="Main Image 2"></div>
                    </div>
                </div>
                <div className="slider-nav">
                    <button aria-label="이전 슬라이드" onClick="moveToMainPhotoSlide(currentSlideIndex - 1)"></button>
                    <button aria-label="다음 슬라이드" onClick="moveToMainPhotoSlide(currentSlideIndex + 1)"></button>
                </div>
                <div className="store-info">
                    <p><strong>🏠 주소:</strong> ${storeDetail.address}, ${storeDetail.detailAddress}</p>
                    <div className="store-info-row">
                        <p><strong>📞 Tel:</strong> ${storeDetail.tel}</p>
                        <p style="line-height: 2; word-break: break-word;"><strong>⏰ 영업시간:</strong> ${storeDetail.openTime}</p>
                    </div>
                    <p><strong>${storeDetail.storeDescription}</strong></p>
                </div>
            </div>


            <!-- 대표 메뉴 섹션 -->
            <div className="section menu-price-section">
                <div className="section-title">대표 메뉴</div>
                <c:forEach var="menu" items="${menuList}">
                    <div className="menu-card">
                        <img src="${menu.menuImage}">
                        <div className="menu-info">
                            <p className="menu-name">${menu.menuName}</p>
                            <p className="menu-description">${menu.menuDescription }</p>
                            <p className="menu-price">${menu.menuPrice}원</p>
                        </div>
                    </div>
                </c:forEach>
            </div>
	
            <!-- 메뉴 음식 사진 슬라이더 섹션 -->
            <div className="section menu-photo-container">
                <div className="section-title">메뉴 사진 모음</div>
                <div className="menu-slider">
                    <c:forEach var="menu" items="${menuList}">
                        <div className="menu-slide"><img src="${menu.menuImage }"></div>
                    </c:forEach>
                </div>
                <div className="menu-slider-nav">
                    <button className="prev-button" aria-label="이전 슬라이드">&#10094;</button>
                    <button className="next-button" aria-label="다음 슬라이드">&#10095;</button>
                </div>
            </div>

            <!-- 지도 섹션 -->
            <div className="section map-section">
                <div className="section-title">가게 상세지도</div>
                <div id="map" className="map-container"></div>
            </div>

            <!-- 리뷰 목록 섹션 -->
            <jsp:include page="reviews.jsp" />

            <!-- 리뷰 입력 섹션 -->
            <jsp:include page="reviewInput.jsp" />
        </div>
    </main> <!-- main content end -->
	
	<jsp:include page="/WEB-INF/views/templates/footer.jsp" /> <!-- footer -->

<!-- 외부 JS 파일 연결 -->
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=eyf1ptej0y"></script>
<script src="/js/store/store.js"></script>

</body>
</html>
