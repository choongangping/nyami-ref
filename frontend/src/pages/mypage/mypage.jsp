<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="css/mypage/myPageStyles.css">
	<link rel="stylesheet" href="css/mypage/commonStyles.css">
	<jsp:include page="/WEB-INF/views/templates/head.jsp" />
</head>
<body>
	<!-- 상단바 -->
	<%@ include file="/WEB-INF/views/templates/header.jsp" %>
    <div class="container">
        <div class="content">
            <!-- 사이드바: 프로필 사진과 이름 표시 -->
            <%@ include file="/WEB-INF/views/mypage/templates/sidebar.jsp" %>
            <!-- 메인 콘텐츠 부분 -->
            <div class="main-content">
                <!-- 탭 메뉴 -->
                <div class="tabs">
                    <button class="tab" data-path="/mypage" onclick="location.href='/mypage'">활동내역</button>
					<button class="tab" data-path="/profile" onclick="location.href='/profile'">프로필</button>
					<button class="tab" data-path="/account" onclick="location.href='/account'">계정 정보</button>
					<button class="tab" data-path="/userPoint" onclick="location.href='/userPoint'">포인트</button>
                </div>
                
                <div class="expanded-content">
	                <!-- 내 활동 섹션 -->
	                <div id="my-check" class="section">
						<h3>좋아요</h3>
						<div class="likes-slider">
							<c:forEach var="mypageLike" items= "${likePageResponse.list}">
								<div class="item">
									<a href="/storeDetail?store_ID=${mypageLike.storeId}">
										<img src="/images/store/${mypageLike.mainImage1}">
									</a>
									<span>${mypageLike.storeName }</span>
								</div>
							</c:forEach>
						</div>
						<!-- 페이지네이션 -->
						<div class="pagination" id="likes-pagination">
							<c:if test="${likPageResponse.startPage > 1}">
								<button onclick="location.href='/mypage?${likePageResponse.startPage-1}'">이전</button>
							</c:if>
							<c:forEach var="i" begin="${likePageResponse.startPage}" end="${likePageResponse.endPage}">
								<button onclick="location.href='/mypage?likePage=${i}&reviewPage=${reviewPageResponse.currentPage}'" 
								class = "${i == likePageResponse.currentPage ? 'active' : ''}">${i}</button>
							</c:forEach>
							<c:if test="${likePageResponse.endPage < likePageResponse.totalPage}">
								<button onclick="location.href='/mypage?${likePageResponse.endPage+1}'">다음</button>
							</c:if>
						</div>
						<h3>리뷰</h3>
						<div class="review-slider">
							<c:forEach var="mypageReview" items= "${reviewPageResponse.list}">
								<div class="item">
									<a href="/storeDetail?store_ID=${mypageReview.storeId}">
										<img src="images/store/${mypageReview.mainImage1}">
									</a>
									<span>${mypageReview.storeName}</span>
								</div>
							</c:forEach>
						</div>
						<!-- 페이지네이션 -->
						<div class="pagination" id="likes-pagination">
							<c:if test="${reviewPageResponse.startPage > 1}">
								<button onclick="location.href='/mypage?${reviewPageResponse.startPage-1}'">이전</button>
							</c:if>
							<c:forEach var="i" begin="${reviewPageResponse.startPage}" end="${reviewPageResponse.endPage}">
								<button onclick="location.href='/mypage?likePage=${likePageResponse.currentPage}&reviewPage=${i}'" 
								class = "${i == reviewPageResponse.currentPage ? 'active' : ''}">${i}</button>
							</c:forEach>
							<c:if test="${likePageResponse.endPage < likePageResponse.totalPage}">
								<button onclick="location.href='/mypage?${reviewPageResponse.endPage+1}'">다음</button>
							</c:if>
						</div>
						<!-- 사업자 가게 신청현황 -->
						<div class="store-item">
								<!-- 사업자 회원에게만 보이는 가게 등록 바 -->
								<c:if test="${store != null}">
								<h3>내 가게 신청현황</h3>
									<c:forEach var="store" items="${store}">
										<!-- 가게 이름을 클릭 -->
						                <h4 class="store-name open-popup" data-id="${store.id}">
						                    ${store.storeName }
						                </h4>
										<div class="progress-bar">
											<div class="${store.enrollStatus=='wait' ? 'step completed': 'step'}">
												<div class="progress-icon">1</div>
												<p>가게 등록 요청</p>
											</div>
											<div class="line"></div>
											<div class="${store.enrollStatus=='read' ? 'step completed': 'step'}">
												<div class="progress-icon">2</div>
												<p>서류 심사 중</p>
											</div>
											<div class="line"></div>
											<div class="${store.enrollStatus=='enrolled' ? 'step completed':'step'}">
												<div class="progress-icon">3</div>
												<p>승인</p>
											</div>
											<div class="lineNo"></div>
											<div class="${store.enrollStatus=='withdrawal' ? 'step failed':'step'}">
												<div class="progress-icon">4</div>
												<p>거절</p>
											</div>
										</div>
										<!-- 팝업창 -->
										<div class="popup" id="popup-${store.id}" style="
										    display: none; 
										    position: fixed; 
										    top: 50%; 
										    left: 50%; 
										    transform: translate(-50%, -50%); 
										    width: 400px; 
										    max-width: 90%; 
										    padding: 20px; 
										    border-radius: 10px; 
										    border: 1px solid #ccc; 
										    background: #fff; 
										    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
										    z-index: 1000;
										    font-family: Arial, sans-serif;">
										    <h3 style="margin-top: 0; font-size: 1.5em; color: #333;">신청 가게 이름: ${store.storeName}</h3>
										    <div style="margin-top: 10px; color: #555; font-size: 1em; line-height: 1.5;">
										        <p>가게 설명 : ${store.storeDescription}</p>
										        <p>번호 : ${store.tel}</p>
										        <p>주소 : ${store.address}</p>
										        <p>상세주소 : ${store.detailAddress}</p>
										        <p>가게설명 : ${store.storeDescription}</p>
										        <p>open - close : ${store.openTime}</p>
										        <c:if test="${not empty store.mainImage1}">
										        	<img src="/images/store/${store.mainImage1}" alt="가게 이미지" style="width: 100%; height: auto; border-radius: 5px; margin-top: 10px;">
										    	</c:if>
										    	<c:if test="${not empty store.mainImage2}">
										        	<img src="/images/store/${store.mainImage2}" alt="가게 이미지" style="width: 100%; height: auto; border-radius: 5px; margin-top: 10px;">
										    	</c:if>  	
									    </div>
									    <c:if test="${store.enrollStatus == 'enrolled'}">
									        <div style="margin-top: 15px; text-align: center;">
									            <button style="padding: 10px 20px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;" 
									                onclick="location.href='/storeDetail?store_ID=${store.id}'">
									                내 가게 보러가기
									            </button>
									        </div>
									    </c:if>
									    <div style="margin-top: 15px; text-align: center;">
									        <button class="close-popup" style="padding: 10px 20px; background-color: #FF5C5C; color: white; border: none; border-radius: 5px; cursor: pointer;">
									            닫기
									        </button>
									    </div>
									</div>
								</c:forEach>
							</c:if>
						</div>
					</div>    
                </div>
            </div>
        </div>
    </div>
<script src="/js/mypage/common.js"></script>
<script src="/js/mypage/mypage.js"></script>
<%@ include file="/WEB-INF/views/templates/footer.jsp" %>
</body>
</html>