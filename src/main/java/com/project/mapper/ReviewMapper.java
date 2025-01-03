package com.project.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import com.project.domain.Review;
import com.project.dto.RequestData;
import com.project.dto.ReviewDTO;
import com.project.dto.ReviewMemberDTO;
import com.project.dto.ReviewWithNicknameDTO;


@Mapper
public interface ReviewMapper {

	// 리뷰 조회
	public List<ReviewWithNicknameDTO> getReviewsByStoreId(long storeId);

	// 리뷰 삽입
	void insertReview(Review newReview);
	
	// 리뷰 조회
	List<ReviewDTO> selectReviews(
			@Param("start") int start,
			@Param("end") int end,
			@Param("requestData") RequestData requestData);

	// 리뷰 삭제
	// void deleteReview(Map<String, Object> reviewDetails); 
	
	
	// 리뷰 삭제 (포인트 추가작업에 따른 로직)
    void deleteReview(@Param("reviewId") Long reviewId);

	// 총 리뷰 개수
	long countReviews(RequestData requestData);

	// 특정 리뷰 확인
	public Review selectReviewById(long id);
	
	// 닉네임과 가게 이름으로 리뷰 조회
	public Review selectReviewByNicknameAndStoreName(@Param("nickname") String nickname,
													 @Param("storeName") String storeName);
	
	// 작성자 정보가 추가된 상세리뷰 조회
	public ReviewMemberDTO selectReviewMemberById(long id);

	// 리뷰 게시중단
	public void inactivateReview(long id);

	// 리뷰 재게시
	public void reactivateReview(long id);
	long countReviews();
	
	// 리뷰 숨김 처리 메서드
    int updateReviewStatusToHidden(@Param("id") long id);
    
    
    Review findReviewByUserAndStore(@Param("memberId") Long memberId, @Param("storeId") Long storeId);

	// 리뷰 수정
	void updateReview(Review Review);

}
