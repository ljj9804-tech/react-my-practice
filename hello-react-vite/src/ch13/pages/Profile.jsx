import { useParams, Link } from 'react-router-dom';

// 프로필 데이터 (실제 앱에선 API로 받아옴)
const profileData = {
  lsy: {
    name: '이상용',
    description: '리액트를 좋아하는 개발자',
  },
  hong: {
    name: '홍길동',
    description: '전설적인 의적',
  },
};

const Profile = () => {
  const params = useParams(); // { username: 'lsy' }
  const profile = profileData[params.username];

  return (
    <div>
      <h1>사용자 프로필 👤</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
      <hr />
      <Link to="/">홈으로</Link>
    </div>
  );
};

export default Profile;
