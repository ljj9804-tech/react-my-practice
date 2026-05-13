import { useParams } from 'react-router-dom';
import NewsList from './NewsList';
import Categories from './Categories';

// 카테고리 영문 키(key)에 매칭되는 한글 이름을 저장한 매핑 객체
const categoryNames = {
  all: '전체보기',
  business: '비즈니스',
  entertainment: '엔터테인먼트',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술',
  busanFood: '부산 맛집 정보 서비스',
  busanTour: '부산 관광 정보 서비스',
};

const NewsPage = () => {
  // React Router의 useParams를 이용해 URL 경로에서 파라미터(category)를 추출
  const { category } = useParams();

  // URL 파라미터가 비어있으면(루트 경로 '/' 인 경우) 기본값을 'all'로 설정
  const currentCategory = category || 'all';

  // 현재 카테고리 키에 해당하는 한글 이름을 객체에서 조회 (없을 경우 기본값 '전체보기')
  const categoryText = categoryNames[currentCategory] || '전체보기';

  return (
    <>
      {/* 화면 중앙에 현재 선택된 카테고리의 한글 타이틀을 표시 */}
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        📰 {categoryText}
      </h1>

      {/* 카테고리 이동 링크 버튼들이 모여있는 네비게이션 바 컴포넌트 */}
      <Categories />

      {/* 선택된 카테고리 값을 기반으로 실제 뉴스 데이터를 서버에서 받아와 보여주는 컴포넌트 */}
      <NewsList category={currentCategory} />
    </>
  );
};

export default NewsPage;
