//   { name: 'all', text: '전체보기' },
//   { name: 'business', text: '비즈니스' },
//   { name: 'entertainment', text: '엔터테인먼트' },
//   { name: 'health', text: '건강' },
//   { name: 'science', text: '과학' },
//   { name: 'sports', text: '스포츠' },
//   { name: 'technology', text: '기술' },

import Categories from '../newsApi/Categories';
import NewsList from '../newsApi/NewsList';

//상단에 이름으로 표기할 내용을 객체 형태로 저장함.
const categoryNames = {
  all: '전체보기',
  business: '비즈니스',
  entertainment: '엔터테인먼트',
  health: '건강',
  science: '과학',
  sports: '스포츠',
  technology: '기술',
};

const Ex5 = () => {
  // URL에서 category 값을 읽어옴
  const { category } = useParams();
  // category가 undefined이면 'all'로 기본값 설정
  const currentCategory = category || 'all';
  // category에 해당하는 텍스트를 categoryNames 객체에서 읽어옴
  const categoryText = categoryNames[currentCategory];

  return (
    <>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        📰 {categoryText} 뉴스
      </h1>
      <Categories />
      <NewsList category={currentCategory} />
    </>
  );
};

export default Ex5;
