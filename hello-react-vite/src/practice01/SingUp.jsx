import { useState } from 'react';

const SignUp = () => {
  // 화면과 데이터를 동기화 하기 위한 기본 값을 설정.
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // 객체안의 값을 쉽게 접근 및 이용하기. 구조분해할당.
  const {username, email, password, passwordConfirm} = form;


  const onChange = (e) => {
    setForm({
        ...form,
    [e.target.name]: e.target.value,
    });
  };

//   회원가입 버튼 클릭 시 유효성검사
  const onClick = () => {
    //모든 값이 들어갔는지 검사
    if (!username || !email || !password || !passwordConfirm) {
      alert('모든 값을 입력해주세요');
      return;
    }

  //비밀번호와 비밀번호 확인 값이 일치하는지 검사
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // 통과 시 최종 데이터를 출력하고, 폼을 초기화합니다.
    alert(
      `유저명: ${username}, email: ${email}, password: ${password}, passwordConfirm: ${passwordConfirm}`
    );

     // 상태를 빈 문자열로 되돌려 폼을 초기화합니다.
    setForm({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
    });
};



  return (
    <div>
      <h2>함수형 컴포넌트 회원 가입</h2>
      
      {/* 데이터가 State와 동기화되는 과정을 화면에서 실시간으로 확인 가능합니다 */}
      <h3>username : {username}</h3>
      <h3>email : {email}</h3>
      <h3>password : {password}</h3>
      <h3>passwordConfirm : {passwordConfirm}</h3>

      <input
        type="text"
        name="username"
        placeholder="username 입력"
        value={username} // React의 State가 UI의 값을 결정합니다.
        onChange={onChange} // UI의 변화를 State에 반영합니다.
      /><br/>
      <input
        type="text"
        name="email"
        placeholder="email 입력"
        value={email}
        onChange={onChange}
      /><br/>
      <input
        type="password"
        name="password"
        placeholder="password 입력"
        value={password}
        onChange={onChange}
      /><br/>
      <input
        type="password"
        name="passwordConfirm"
        placeholder="passwordConfirm 입력"
        value={passwordConfirm}
        onChange={onChange}
      /><br/>
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default SignUp;