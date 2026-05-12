import { useState, useEffect } from 'react';
import axios from 'axios';

const Jsonplaceholder = () => {
  const [posts, setPosts] = useState([]); // API에서 받아온 게시글 데이터 저장
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1); // 현재 선택된 사용자 ID

  // 컴포넌트가 마운트될 때와 userId가 변경될 때마다 API 호출(실행)
  useEffect(() => {
    // API 호출 함수
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          // userId에 따라 게시글을 필터링하여 가져옴, 최대 5개로 제한
          // useId가 1이기 때문에 처음에는 userId=1인 게시글이 보여짐
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}&_limit=5`,
        );
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [userId]); // userId가 바뀔 때마다 API 재호출

  return (
    <div style={{ padding: '20px' }}>
      <h2>사용자별 게시글</h2>
      <div>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setUserId(id)}
            style={{
              marginRight: '8px',
              fontWeight: userId === id ? 'bold' : 'normal',
              background: userId === id ? '#007bff' : '#eee',
              color: userId === id ? 'white' : 'black',
              padding: '4px 12px',
            }}
          >
            User {id}
          </button>
        ))}
      </div>
      {loading ? (
        <p>로딩 중... ⏳</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Jsonplaceholder;
