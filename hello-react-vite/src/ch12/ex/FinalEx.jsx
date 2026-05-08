// 아래 초기 상태가 있습니다. immer와 useState를 사용하여
// 다음 기능을 구현하는 React 컴포넌트를 작성하세요.
// 1. 학생 추가 (이름 입력 후 버튼 클릭)
// 2. 점수 증가 (+10점) 버튼
// 3. 학생 삭제 버튼
import { produce } from 'immer';
import { useState } from 'react';

const FinalEx = () => {
  // ── 상태 선언 (State) ──────────────────────────────────────────────────

  // 전체 학생 목록과 다음 부여할 고유 ID를 관리하는 통합 상태 객체
  const [state, setState] = useState({
    students: [
      { id: 1, name: '김철수', score: 80 },
      { id: 2, name: '이영희', score: 90 },
    ],
    nextId: 3,
  });

  // 사용자가 입력창에 실시간으로 작성 중인 이름과 점수를 저장하는 임시 상태
  const [inputName, setInputName] = useState('');
  const [inputScore, setInputScore] = useState('');

  // ── 학생 추가 기능 (Add) ───────────────────────────────────────────────

  /**
   * [addStudent 함수]
   * - 이름과 점수 칸이 모두 비어있는 경우 무분별하게 추가되는 것을 방지(예외 처리)합니다.
   * - Immer의 produce를 사용해 불변성을 지키며 기존 학생 배열 뒤에 새 학생 정보를 직접 밀어 넣습니다(push).
   * - 추가 완료 후, 다음 학생을 위해 입력창을 깨끗하게 비워줍니다.
   */
  const addStudent = () => {
    if (!inputName.trim() && !inputScore.trim()) return;
    setState(
      produce((draft) => {
        draft.students.push({
          id: draft.nextId,
          name: inputName,
          score: inputScore,
        });
        // 다음 추가될 학생에게 부여될 고유 ID(nextId)를 1 증가시킵니다.
        draft.nextId += 1;
      }),
    );
    setInputName('');
    setInputScore('');
  };

  // ── 점수 증가 기능 (Update) ────────────────────────────────────────────

  /**
   * [addScorePlus10 함수]
   * - 클릭한 학생의 고유 ID를 가져와 students 배열 속에서 해당 학생의 위치(객체)를 찾습니다.
   * - 입력창에서 문자로 들어온 점수 데이터가 있을 수 있으므로 Number()로 안전하게 변환하여 10점을 가산합니다.
   * - Immer 덕분에 찾은 학생 객체의 속성을 직접 수정(`student.score = ...`)해도 렌더링이 정상 반영됩니다.
   */
  const addScorePlus10 = (id) => {
    setState(
      produce((draft) => {
        const student = draft.students.find((s) => s.id === id);
        if (student) student.score = Number(student.score) + 10;
      }),
    );
  };

  // ── 학생 삭제 기능 (Delete) ────────────────────────────────────────────

  /**
   * [removeStudent 함수]
   * - 삭제 대상 학생의 ID를 이용해 students 배열 안에서 몇 번째 칸(Index)에 들어있는지 찾습니다.
   * - 찾은 인덱스가 유효하다면(not -1), Immer의 splice 기능을 통해 원본 배열에서 해당 항목 딱 1개만 안전하게 잘라냅니다.
   */
  const removeStudent = (id) => {
    setState(
      produce((draft) => {
        const index = draft.students.findIndex((s) => s.id === id);
        if (index !== -1) draft.students.splice(index, 1);
      }),
    );
  };

  // ── 화면 렌더링 영역 (JSX) ──────────────────────────────────────────────
  return (
    <div>
      <h2>학생관리</h2>
      {/* 학생 이름 입력창 */}
      <input
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        placeholder="학생 이름 입력"
      />
      {/* 학생 점수 입력창 */}
      <input
        value={inputScore}
        onChange={(e) => setInputScore(e.target.value)}
        placeholder="학생 점수 입력"
      />
      <button onClick={addStudent}>추가</button>

      <h3>학생목록</h3>
      <ul>
        {/* 학생 배열을 순회하며 화면에 리스트 아이템(li)으로 출력 */}
        {state.students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.score}점
            {/* 개별 항목 수정을 위해 클릭할 때마다 각 학생의 고유 id를 매개변수로 전달합니다 */}
            <button onClick={() => addScorePlus10(s.id)}>+10점</button>
            <button onClick={() => removeStudent(s.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinalEx;
