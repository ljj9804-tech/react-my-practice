import { useState, useEffect } from 'react';
import axios from 'axios';

const Ex2 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(1); // userId 변경으로 다른 게시글 조회
  const [selectedPost, setSelectedPost] = useState(null); // 선택된 게시글 데이터 저장

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setSelectedPost(null); //userId가 바뀔때마다 초기화
      try {
        const response = await axios.get(
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
      <h2>사용자별 게시글(상세보기 기능 추가)</h2>
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
        // 클릭 가능하도록 cursor스타일 추가, onClick 이벤트 연결
        <ul style={{ paddingLeft: '20px' }}>
          {posts.map((post) => (
            <li
              key={post.id}
              onClick={() => setSelectedPost(post)} // 게시글 클릭 시 해당 게시글 데이터(selectedPost)에 저장
              style={{
                cursor: 'pointer', // 클릭 가능하도록 커서 스타일 추가
                color: selectedPost?.id === post.id ? 'blue' : 'black', // 선택된 게시글은 파란색으로 표시
              }}
            >
              <strong>{post.title}</strong>
            </li>
          ))}
        </ul>
      )}
      {/* 💡 추가: 선택된 게시글이 있을 때만 하단에 상세 내용(상자 형태)을 펼쳐서 보여줌 */}
      {selectedPost && (
        <div
          style={{
            marginTop: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
          }}
        >
          <h2>상세 내용</h2>
          <p>
            <strong>제목:</strong> {selectedPost.title}
          </p>
          <p>
            <strong>내용:</strong> {selectedPost.body}
          </p>
          <button
            onClick={() => setSelectedPost(null)}
            style={{ marginTop: '10px', cursor: 'pointer' }}
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default Ex2;
