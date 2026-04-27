import { useState } from 'react';

const JoinForm = () => {
  // 상태(State)를 하나로 묶어 관리하여 데이터의 일관성을 유지합니다.
  //원본 데이터 역할(여기서 useState는 리액트의 데이터를 관리해주는 함수(도구))
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // JSX에서 'form.username' 대신 'username'으로 바로 쓰기 위한 구조분해할당입니다.
  const { username, email, password, passwordConfirm } = form;

  // 사용자가 입력할 때마다 호출되는 범용 이벤트 핸들러입니다.
  //이벤트 감지 > 입력받은 글자(이벤트)가 어떤 태그(e.target)인지 찾음_여기선 name이란 속성값을 확인함
  //만약 email을 수정(입력)하게되면, name에 email을 넣어줌
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // 회원가입 버튼 클릭 시 유효성을 검사하고 로직을 수행합니다.
  const onClick = () => {
    // 모든 필드가 비어있지 않은지 검사합니다.
    if (!username || !email || !password || !passwordConfirm) {
      alert('모든 값을 입력해주세요');
      return;
    }
    // 비밀번호와 비밀번호 확인 값이 같은지 검사합니다.
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

  // UI 렌더링 부분입니다. 
  // value 속성에 state를 연결하여 '제어 컴포넌트(Controlled Component)'로 만듭니다.
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
      />
      <input
        type="text"
        name="email"
        placeholder="email 입력"
        value={email}
        onChange={onChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password 입력"
        value={password}
        onChange={onChange}
      />
      <input
        type="password"
        name="passwordConfirm"
        placeholder="passwordConfirm 입력"
        value={passwordConfirm}
        onChange={onChange}
      />
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default JoinForm;