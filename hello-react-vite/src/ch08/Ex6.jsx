import { useReducer } from 'react';

// 1. 초기값, 객체에 정의
const initialState = {
  //사용할 기본 배열
  names: [
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ],

  //입력값을 받을 변수
  inputText: '',

  //텍스트 새로 추가 시 사용할 id
  nextId: 5,

  //삭제한 요소를 가지는 배열(휴지통)
  deletedItems: [],
};

// 2. Reducer 함수 생성
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, inputText: action.payload };

    case 'ADD_ITEM':
      return {
        ...state,
        names: state.names.concat({ id: state.nextId, text: state.inputText }),
        nextId: state.nextId + 1,
        inputText: '',
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        // 삭제 할 대상을 제외한 새로운 배열을 만들고 교체 작업.
        names: state.names.filter((name) => name.id !== action.payload.id),
        // 복구를 할 예정, 삭제한 요소를, 보관하는 배열에 추가.
        deletedItems: [...state.deletedItems, action.payload],
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        names: state.names.map((name) =>
          name.id === action.payload.id
            ? { ...name, text: action.payload.newText }
            : name,
        ),
      };

    case 'RESTORE_ITEM':
      return {
        ...state,
        // 휴지통에서 꺼내서 , 기존 배열에 복구
        names: [...state.names, action.payload],
        // 휴지통 배열에서는 해당 항목 제거. (왜? 이동 했으니. )
        deletedItems: state.deletedItems.filter(
          (name) => name.id !== action.payload.id,
        ),
      };
  }
}

const Ex6 = () => {
  //3. useReducer 정의해서, dispatch 이용해서, 이벤트 처리를 한다. (중앙 집중형)
  const [state, dispatch] = useReducer(reducer, initialState);

  //4. state 객체에 있는 내용을 화면에서 꺼내서 이용하기 쉽게 꺼내는 작업. 구조분해할당.
  const { names, inputText, nextId, deletedItems } = state;

  //5. 이벤트 핸들러들이 올 예정.
  const onChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', payload: e.target.value });
  };

  const onClick = () => {
    if (!inputText.trim()) {
      alert('공백은 입력 할수 없습니다.');
      return;
    }

    if (names.some((name) => name.text === inputText)) {
      alert('이미 존재하는 항목입니다.');
      dispatch({ type: 'CHANGE_INPUT', payload: '' });
      return;
    }

    dispatch({ type: 'ADD_ITEM' });
  };

  // 삭제 작업 : D
  const onRemove = (id) => {
    const removedItem = names.find((name) => name.id === id);
    if (confirm(`${removedItem.text}를 삭제하시겠습니까?`)) {
      dispatch({ type: 'REMOVE_ITEM', payload: removedItem });
      alert(`삭제한 요소는 :  ${id}`);
    }
  };

  // 수정 작업 : U
  const rightClick = (e, id, text) => {
    e.preventDefault(); // 브라우저에서 기본 우클릭 메뉴가 뜨는 것을 방지하는 기능.
    const newText = prompt('수정할 내용을 입력하세요.', text);
    if (newText && newText.trim()) {
      dispatch({ type: 'UPDATE_ITEM', payload: { id, newText } });
    }
  };

  // 복구 작업 :
  const restoreItem = (id) => {
    // 삭제한 요소를 가지는 배열에서, 복구할 요소를 찾고
    const restoredItem = deletedItems.find((item) => item.id === id);
    dispatch({ type: 'RESTORE_ITEM', payload: restoredItem });
  };

  // 추가 이벤트 핸들러 더 있음. 추가 할 예정.

  //6. 출력용 배열 , names 를 그리기 작업 : 6장 컴포넌트 반복, 내장 함수, map 이용했음.
  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)}
      // 수정 순서3
      onContextMenu={(e) => rightClick(e, name.id, name.text)}
    >
      {name.text}
    </li>
  ));

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />
      <button onClick={onClick}>추가</button>

      {/* 오름차순, 내림차순 정렬 기능
    순서3 */}
      {/* <button onClick={sortAsscending}>오름차순 정렬</button>
      <button onClick={sortDescending}>내림차순 정렬</button> */}
      <ul>{namesList}</ul>
      {/* // 복구 기능 구현
        // 순서3 */}
      <h2>삭제한 요소 목록 출력</h2>
      {deletedItems.length > 0 && (
        <ul>
          {deletedItems.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => restoreItem(item.id)}>복구</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Ex6;
