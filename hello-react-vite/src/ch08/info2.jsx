// Info2.jsx - useInputs 커스텀 Hook 사용
import useInputs from './useInputs';

const Info2 = () => {
  const [state, onChange] = useInputs({ name: '', nickname: '' });
  const { name, nickname } = state;

  return (
    <div>
      <input name="name" value={name} onChange={onChange} placeholder="이름" />
      <input
        name="nickname"
        value={nickname}
        onChange={onChange}
        placeholder="닉네임"
      />
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info2;
