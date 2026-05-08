import { produce } from 'immer';

// 아래 배열에서 id가 3인 항목의 todo 값을 '독서하기'로 수정하고,
// id가 1인 항목을 삭제하는 코드를 immer로 작성하세요.

const Ex2 = () => {
  const todoList = [
    { id: 1, todo: '운동하기', checked: false },
    { id: 2, todo: '공부하기', checked: false },
    { id: 3, todo: '책 읽기', checked: false },
  ];

  console.log('실습 원본 배열  : ', todoList);

  // id가 3인 항목의 todo 값을 "독서하기"로 수정
  const updatedTodoList = produce(todoList, (draft) => {
    const todo = draft.find((t) => t.id === 3);
    if (todo) {
      todo.todo = '독서하기';
    }
  });

  console.log('실습 수정된 배열: ', updatedTodoList);

  // id가 1인 항목을 삭제
  const deletedTodoList = produce(todoList, (draft) => {
    const todo = draft.find((t) => t.id === 1);
    if (todo) {
      draft.splice(draft.indexOf(todo), 1);
    }
  });

  console.log('실습 삭제된 배열: ', deletedTodoList);

  console.log('실습 원본 배열  : ', todoList);

  return <div></div>;
};

export default Ex2;
