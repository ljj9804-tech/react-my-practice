/*
## 종합 실습 문제 (심화)
아래 요구사항을 모두 충족하는 **미니 포스트 뷰어**를 만드세요.
1. 상단에 카테고리 대신 **페이지 번호 버튼** (1 ~ 3)
2. 버튼 클릭 시 해당 페이지의 포스트 불러오기 (`/posts?_page=N&_limit=5`)
3. 로딩 중 / 에러 / 빈 목록 상태 처리
4. `usePromise` 커스텀 훅 활용
5. 사용 API: `https://jsonplaceholder.typicode.com`

테스트 : https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5
*/

import axios from 'axios';
import usePromise from '../newsApi/UsePromise';

const FinalEx = ({ page }) => {
  const [loading, resolved, error] = usePromise(
    () =>
      axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`,
      ),
    [page],
  );

  // 유효성 체크
  if (loading) return <p>⏳목록 불러오는 중..</p>;
  if (error) return <p style={{ color: 'red' }}>❌ 에러 발생.</p>;
  if (!resolved) return null; // 빈 화면 그리기

  //유효성 체크 끝나면 데이터 꺼내서 화면에 표시하기
  const posts = resolved.data;

  if (posts.length === 0) return <p>📋 게시글이 없습니다.</p>;

  return (
    <div>
      <h1>😃게시글 목록</h1>
      <ul>
        {posts.map((post) => (
          <li>
            Title : {post.title} | content : {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalEx;
