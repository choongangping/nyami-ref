import { Link } from 'react-router-dom';
import ErrorContainer from '../../components/container/ErrorContainer';
import LoadingContainer from '../../components/container/LoadingContainer';
import useFetch from '../../hooks/useFetch';
import styles from './StoreList.module.css';

const StoreList = ({ local, foodCategory, theme, sort }) => {
  // props 중 값이 전달된 속성만을 배열로 생성
  const queryEntries = Object.entries({
    local,
    foodCategory,
    theme,
    sort,
  }).filter(
    ([key, value]) => value !== undefined && value !== null && value !== ''
  );

  // 배열로 쿼리 파라미터 생성
  const queryString = new URLSearchParams(queryEntries).toString();

  // 쿼리 파라미터 존재 여부에 따라 url 생성
  const url = queryString ? `?${queryString}` : '';

  const { data, error, loading } = useFetch(`/api/stores${url}`);
  const storeList = data?.content;

  console.log(data);

  return (
    <>
      {error && (
        <ErrorContainer
          error={error}
          onRetry={() => window.location.reload()}
        />
      )}
      {loading && <LoadingContainer />}

      <div className={styles.storeListContainer}>
        {storeList ? (
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
          ))
        ) : (
          <ErrorContainer error="등록된 가게가 존재하지 않습니다." />
        )}
      </div>
    </>
  );
};

export default StoreList;
