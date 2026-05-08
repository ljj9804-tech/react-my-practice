import { produce } from 'immer';
import { useRef, useCallback, useState } from 'react';

// 위 App 컴포넌트에서 onChange 함수는 스프레드 연산자를 사용합니다.
// 이를 immer의 produce를 사용하여 동일하게 동작하도록 변경하세요.

const Ex3 = () => {
  const nextId = useRef(1); // ID 자동 증가용 (렌더링과 무관)
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({ array: [], uselessValue: null });

  // 입력값 변경 핸들러 ──────────────────────────────────────────────────────
  //   const onChange = useCallback(
  //     (e) => {
  //       const { name, value } = e.target;
  //       setForm({ ...form, [name]: value }); // 스프레드로 불변성 유지
  //     },
  //     [form],
  //   );

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value; // immer의 draft를 사용하여 불변성 유지
        }),
      );
    },
    [form],
  );

  // 등록 핸들러 ──────────────────────────────────────────────────────
  //   const onSubmit = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //       const info = {
  //         id: nextId.current,
  //         name: form.name,
  //         username: form.username,
  //       };
  //       setData({ ...data, array: data.array.concat(info) }); // concat으로 불변성 유지
  //       setForm({ name: '', username: '' });
  //       nextId.current += 1;
  //     },
  //     [data, form.name, form.username],
  //   );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };
      setData(
        produce(data, (draft) => {
          draft.array.push(info); // immer의 draft를 사용하여 불변성 유지
        }),
      );
      setForm({ name: '', username: '' });
      nextId.current += 1;
    },
    [data, form.name, form.username],
  );

  // 삭제 핸들러 ──────────────────────────────────────────────────────

  //   const onRemove = useCallback(
  //     (id) => {
  //       setData({ ...data, array: data.array.filter((info) => info.id !== id) });
  //     },
  //     [data],
  //   );

  const onRemove = useCallback(
    (id) => {
      setData(
        produce(data, (draft) => {
          draft.array = draft.array.filter((info) => info.id !== id);
        }),
      );
    },
    [data],
  );

  //렌더링 부분 ──────────────────────────────────────────────────────
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <ul>
        {data.array.map((info) => (
          <li
            key={info.id}
            onClick={() => onRemove(info.id)}
            style={{ cursor: 'pointer' }}
          >
            {info.username} ({info.name}) ← 클릭 시 삭제
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ex3;
