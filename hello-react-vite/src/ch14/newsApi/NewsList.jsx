import axios from 'axios';
import styled from 'styled-components';
import NewsItem from './NewsItemBlock';
import usePromise from './UsePromise';
import PdItemFood from './PdItemFood';

// ==========================================
// 1. 스타일드 컴포넌트 및 기본 설정
// ==========================================

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding: 0 5rem;
  margin: 0 auto;
  margin-top: 2rem;

  /* 반응형 웹 설정: 화면이 좁아지면 좌우 여백을 줄임 */
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

// 환경 변수에서 안전하게 API 키 로드
const apiKey = import.meta.env.VITE_News_API_KEY;
const publicDataApiKey = import.meta.env.VITE_Public_Data_API_KEY;

// ==========================================
// 2. 확장성 관리를 위한 매핑 객체 (오브젝트 맵)
// ==========================================

// [API 주소 지도] 카테고리별 공공데이터 URL 생성 함수
const apiEndpoints = {
  busanFood: (publicKey) =>
    `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=${publicKey}&pageNo=1&numOfRows=100&resultType=json`,

  busanTour: (publicKey) =>
    `https://apis.data.go.kr/6260000/AttractionService/getAttractionKr?serviceKey=${publicKey}&pageNo=1&numOfRows=100&resultType=json`,

  busanParking: (publicKey) =>
    `http://apis.data.go.kr/6260000/BusanPblcPrkngInfoService/getPblcPrkngInfo?serviceKey=${publicKey}&numOfRows=10&pageNo=1&resultType=json`,
};

// [화면 렌더링 지도] 카테고리별 데이터 추출 경로(getData)와 출력할 컴포넌트(Component)
const categoryConfigs = {
  busanFood: {
    getData: (resolved) => resolved.data.getFoodKr?.item,
    Component: PdItemFood,
  },
  busanTour: {
    getData: (resolved) => resolved.data.getAttractionKr?.item,
    Component: PdItemFood,
  },
  busanParking: {
    // 💡 추가된 주차장 데이터 구조에 맞게 설정 (서버 응답 객체명 확인 필요)
    getData: (resolved) => resolved.data.getPblcPrkngInfo?.item,
    Component: PdItemFood, // 필요시 주차장 전용 컴포넌트로 변경 가능
  },
};

// ==========================================
// 3. NewsList 핵심 컴포넌트 본문
// ==========================================

const NewsList = ({ category = 'all' }) => {
  // API 요청 처리를 위한 내부 비동기 함수
  const sendData = () => {
    // 공공데이터 매핑 객체에 등록되어 있다면 공공데이터 API 호출
    if (apiEndpoints[category]) {
      const getUrl = apiEndpoints[category];
      return axios.get(getUrl(publicDataApiKey));
    }

    // 등록되어 있지 않다면 기본 뉴스 API 호출
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=${apiKey}`,
    );
  };

  // 커스텀 훅을 통한 데이터 통신 상태 관리 (카테고리 변경 시 재실행)
  const [loading, resolved, error] = usePromise(sendData, [category]);

  // 로딩, 에러 예외 처리
  if (loading) {
    return (
      <NewsListBlock>
        <p>⏳ 로딩 중...</p>
      </NewsListBlock>
    );
  }

  if (error) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>{error}</p>
      </NewsListBlock>
    );
  }

  if (!resolved) return null;

  // 현재 카테고리의 렌더링 설정 가져오기 (공공데이터가 아닐 시 undefined)
  const config = categoryConfigs[category];

  // 매핑 정보를 기반으로 동적으로 안전하게 배열 추출
  const data = config
    ? config.getData(resolved) || []
    : resolved.data.articles || [];

  // 데이터 배열이 비어있을 때 예외 처리
  if (data.length === 0) {
    return (
      <NewsListBlock>
        <p style={{ color: 'red' }}>📭 표시할 데이터가 없습니다.</p>
      </NewsListBlock>
    );
  }

  // 매핑 정보를 기반으로 렌더링할 아이템 컴포넌트 동적 결정
  const ItemComponent = config ? config.Component : NewsItem;

  return (
    <NewsListBlock>
      {data.map((item, index) => (
        <ItemComponent
          // 공공데이터는 고유 ID 대용으로 index를, 뉴스 API는 url을 key로 활용
          key={config ? index : item.url}
          article={item}
        />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
