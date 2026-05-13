import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// 네비게이션 바에 표시할 카테고리 데이터 배열 (URL 경로로 사용할 name과 화면에 보여줄 text)
const categories = [
  { name: 'all', text: '전체보기' },
  { name: 'business', text: '비즈니스' },
  { name: 'entertainment', text: '엔터테인먼트' },
  { name: 'health', text: '건강' },
  { name: 'science', text: '과학' },
  { name: 'sports', text: '스포츠' },
  { name: 'technology', text: '기술' },
  { name: 'busanFood', text: '부산 맛집 정보 서비스' },
  { name: 'busanTour', text: '부산 관광 정보 서비스' },
];

// 카테고리 버튼들을 감싸는 전체 컨테이너 컴포넌트
const CategoriesBlock = styled.div`
  display: flex; /* 가로 방향 배치 */
  padding: 1rem;
  width: 768px; /* 기본 PC 화면 크기 지정 */
  margin: 0 auto; /* 화면 중앙 정렬 */
  gap: 0.5rem; /* 버튼 사이의 간격 */
  flex-wrap: wrap; /* 화면이 좁아지면 줄바꿈 허용 */

  /* 반응형 웹 설정: 화면 크기가 768px 이하(모바일 등)가 되면 전체 너비를 채움 */
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

// React Router의 NavLink 컴포넌트에 styled-components 스타일을 확장 적용한 컴포넌트
const Category = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 20px; /* 둥근 알약 모양 버튼 스타일 */
  background: #e9ecef; /* 기본 배경색 (연한 회색) */
  color: #343a40;
  text-decoration: none; /* 링크 밑줄 제거 */
  transition: background 0.2s; /* 배경색 변경 시 부드러운 애니메이션 효과 */

  /* 마우스를 올렸을 때(Hover) 스타일 */
  &:hover {
    background: #dee2e6;
  }

  /* 현재 브라우저 URL 경로와 NavLink의 to 경로가 일치할 때 자동으로 활성화되는 스타일 */
  &.active {
    background: #007bff; /* 활성화 시 파란색 배경 */
    color: white; /* 활성화 시 흰색 글씨 */
    font-weight: 600; /* 활성화 시 글씨 굵게 */
  }
`;

const Categories = () => (
  <CategoriesBlock>
    {/* categories 배열을 순회하며 카테고리 버튼 목록을 생성 */}
    {categories.map((c) => (
      <Category
        key={c.name} /* 리액트 가상 DOM 식별을 위한 고유 키 값 */
        to={
          c.name === 'all' ? '/' : `/${c.name}`
        } /* 'all'은 루트 경로(/), 나머지는 /name 경로로 설정 */
        end={
          c.name === 'all'
        } /* '/' 경로일 때 다른 서브 경로와 중복 활성화되는 것을 방지 */
      >
        {c.text}
      </Category>
    ))}
  </CategoriesBlock>
);

export default Categories;
