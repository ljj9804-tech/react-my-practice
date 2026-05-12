import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈 페이지 🏠</h1>
      <p>환영합니다! 여기는 메인 홈 화면입니다.</p>
      <li>
        <Link to="/profiles/lsy">이상용 프로필</Link>
      </li>
      <li>
        <Link to="/profiles/hong">홍길동 프로필</Link>
      </li>
      <li>
        <Link to="/profiles2/sejong">세종대왕 프로필</Link>
      </li>
    </div>
  );
};

export default Home;
