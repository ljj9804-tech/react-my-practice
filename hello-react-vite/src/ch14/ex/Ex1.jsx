import { useState } from 'react';
import axios from 'axios';

const DummyJson = () => {
  // 상태 관리: API 응답 데이터, 로딩 상태, 에러 메시지
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 버튼 클릭 시 실행되는 비동기 데이터 요청 함수
  const onClick = async () => {
    setLoading(true); // 로딩 시작
    setError(null); // 이전 에러 초기화
    try {
      // API 서버에 GET 요청 보냄(서버로 요청 시 항상 try-catch로 감싸서 에러 처리 해주기)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      setData(response.data); // 성공 시 가져온 데이터를 상태(response.data)에 저장
    } catch (e) {
      setError('데이터를 불러오는 데 실패했습니다.'); // 에러 발생 시 메시지 저장
      console.log(e);
    }
    setLoading(false); // 요청 완료 후 로딩 종료
  };

  return (
    <div style={{ padding: '20px' }}>
      <p>실습 jsonplaceholder 불러오기</p>
      {/* 로딩 중일 때는 버튼을 비활성화하고 문구를 변경 */}
      <button onClick={onClick} disabled={loading}>
        {loading ? '불러오는 중...' : '데이터 불러오기'}
      </button>

      {/* 에러 발생 시에만 에러 메시지 표시 */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* 데이터가 존재할 때만 textarea에 JSON 형태로 예쁘게 정렬하여 표시 */}
      {data && (
        <textarea
          rows={7}
          cols={50}
          value={JSON.stringify(data, null, 2)} // JSON 객체를 보기 좋은 문자열로 변환
          readOnly
          style={{ marginTop: '10px', display: 'block' }}
        />
      )}
    </div>
  );
};

export default DummyJson;
