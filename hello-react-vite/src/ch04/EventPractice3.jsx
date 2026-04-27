import { useState } from 'react';

const EventPractice3 = () => {

    //form 안에 초깃값이 할당됨( 초기값은 useState 괄호 값)
    //추가로 setForm 함수 포함
    //결론: useState를 이용해서 2가지를 반환한다
    const [form, setForm] = useState({userName: '', message: ''});

    const{username, message} = form;

    //이벤트 리스너 추가
    //키보드에 입력된 내용이 변경 시 동작하는 리스너
    const onChangeInput = (e) => {
        const nextForm = {
            ...form, //spread연산자: 기존 객체를 복사
            [e.target.name]: e.target.value
        };
        setForm(nextForm);   
    };

    
    //클릭 시 동작하는 이벤트 리스너
    const onClick = () => {
        alert(username + ':' + message);
        setForm({username: '', message: ''});
    };


    //키 입력 시 동작하는 이벤트 리스너
      const onKeyPress = (e) => {
    if (e.key === 'Enter') onClick();
  };


    return (
    <div>
      <h1>이벤트 연습</h1>
      <input type="text" name="username" placeholder="사용자명"
        value={username} onChange={onChangeInput} />
      <input type="text" name="message" placeholder="아무거나 입력해 보세요"
        value={message} onChange={onChangeInput} onKeyPress={onKeyPress} />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice3;