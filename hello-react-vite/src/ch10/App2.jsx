// 개인 연습용
import { useState, useRef, useCallback, useMemo } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  /* 1. 상태 관리 (State) */
  // 할 일 목록 데이터 (id, 내용, 완료 여부, 우선순위 포함)
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트의 기초 알아보기', checked: true, priority: 'high' },
    {
      id: 2,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
      priority: 'medium',
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
      priority: 'low',
    },
    { id: 4, text: '리액트의 기초 알아보기', checked: true, priority: 'high' },
    {
      id: 5,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
      priority: 'medium',
    },
    {
      id: 6,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
      priority: 'low',
    },
    { id: 7, text: '리액트의 기초 알아보기', checked: true, priority: 'high' },
    {
      id: 8,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
      priority: 'medium',
    },
    {
      id: 9,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
      priority: 'low',
    },
    { id: 10, text: '리액트의 기초 알아보기', checked: true, priority: 'high' },
    {
      id: 11,
      text: '컴포넌트 스타일링해 보기',
      checked: true,
      priority: 'medium',
    },
    {
      id: 12,
      text: '일정 관리 앱 만들어 보기',
      checked: false,
      priority: 'low',
    },
  ]);

  // 검색어 입력을 관리하는 상태
  const [keyword, setKeyword] = useState('');
  // 현재 화면에 보여줄 항목의 개수를 관리하는 상태 (페이지네이션 커서)
  const [cursor, setCursor] = useState(10);

  /* 2. 고유값 관리 (Ref) */
  // 새 항목 추가 시 사용할 고유 ID (Ref를 사용하여 값이 변해도 리렌더링을 유발하지 않음)
  const nextId = useRef(13);

  /* 3. 연산 결과 재사용 (useMemo) */
  // 완료된 할 일의 개수 계산 (todos 배열이 변경될 때만 재계산)
  const checkedCount = useMemo(
    () => todos.filter((todo) => todo.checked).length,
    [todos],
  );

  // 검색어에 따라 필터링된 목록 산출
  const filteredTodos = useMemo(() => {
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [todos, keyword]);

  // 필터링된 목록에서 커서(개수)만큼 잘라내어 실제 화면에 보일 데이터 생성
  const visibleTods = useMemo(() => {
    return filteredTodos.slice(0, cursor);
  }, [filteredTodos, cursor]);

  // 전체 데이터가 현재 표시된 데이터보다 많으면 '더보기' 버튼 활성화 여부 결정
  const hasMore = cursor < filteredTodos.length;

  /* 4. 이벤트 핸들러 (useCallback) */
  // 새 할 일 추가 함수 (함수형 업데이트를 통해 최신 상태 보장 및 성능 최적화)
  const onInsert = useCallback((text, priority = 'medium') => {
    if (!text.trim()) {
      alert('빈 문자열은 입력 불가입니다.');
      return;
    }

    const todo = {
      id: nextId.current,
      text,
      checked: false,
      priority,
    };

    setTodos((todos) => todos.concat(todo)); // 불변성 유지를 위해 concat 사용
    nextId.current += 1;
  }, []);

  // 항목 삭제 함수 (지정한 id를 제외한 나머지로 새 배열 생성)
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  // 완료 상태 토글 함수 (id가 일치하면 checked 값을 반전)
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  // 항목 내용 수정 함수
  const onUpdate = useCallback((id, newText) => {
    if (!newText.trim()) {
      alert('빈 문자열은 입력 불가입니다.');
      return;
    }

    setTodos((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }, []);

  // 검색어 변경 핸들러 (검색 시 커서를 다시 초기값 10으로 리셋)
  const onChangeKeyword = useCallback((e) => {
    setKeyword(e.target.value);
    setCursor(10);
  }, []);

  // 더보기 버튼 클릭 시 호출 (표시 개수를 10개 늘림)
  const onLoadMore = useCallback(() => {
    setCursor((prevCursor) => prevCursor + 10);
  }, []);

  /* 5. 렌더링 */
  return (
    <div>
      {/* 전체 개수와 체크된 개수를 템플릿 상단에 표시 */}
      <TodoTemplate total={todos.length} checked={checkedCount}>
        {/* 새 항목 입력 컴포넌트 */}
        <TodoInsert onInsert={onInsert} />

        {/* 할 일 검색창 */}
        <input
          value={keyword}
          onChange={onChangeKeyword}
          placeholder="검색어를 입력하세요"
          style={{
            width: '100%',
            padding: '0.6rem',
            fontSize: '1rem',
            boxSizing: 'border-box',
          }}
        />

        {/* 페이지네이션 처리된 리스트 표시 */}
        <TodoList
          todos={visibleTods}
          onRemove={onRemove}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />

        {/* 불러올 데이터가 더 남아있을 때만 더보기 버튼 노출 */}
        {hasMore && (
          <button
            onClick={onLoadMore}
            style={{
              width: '100%',
              padding: '0.7rem',
              border: 'none',
              background: '#22b8cf',
              color: 'white',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            더보기
          </button>
        )}
      </TodoTemplate>
    </div>
  );
};

export default App;
