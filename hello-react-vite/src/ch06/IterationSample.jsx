import React, { useState } from 'react';

const IterationSample = () => {
  // 활성 목록(Active List):
  // ***현재 화면***에 **보여지고 상호작용하는** 데이터
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  // 사용자가 입력 중인 텍스트의 상태
  const [inputText, setInputText] = useState('');

  // 새로운 항목 추가 시 사용할 고유 ID (카운터 역할)
  const [nextId, setNextId] = useState(5);

  //휴지통 역할의 배열
  const [trash, setTrash] = useState([]);

  //함수 영역 ------------------------------------------------------------------
  const onChange = (e) => setInputText(e.target.value);

  // //추가 작업(기존 추가)
  // const onClick = () => {
  //   //concat: 기존 배열에 새로운 요소를 추가하여 새로운 배열을 만드는 내장함수
  //   const nextNames = names.concat({ id: nextId, text: inputText });
  //   //기존 배열을 교체하는 작업
  //   setNames(nextNames);
  //   setNextId(nextId + 1); //id는 중복되면 안됨
  //   setInputText(''); //입력창을 비워줌
  // };

  //추가 작업(추가 시 중복 방지기능 추가_실습3)
  const onClick = () => {
    //공백 검사기능 추가추가
    if (!inputText.trim()) {
      alert('공백은 입력 할 수 없습니다.');
      return;
    }

    //some: 하나라도 일치하면 true, 모두 일치하지 않으면 false를 반환(중복 검사에 유용)
    if (names.some((name) => name.text === inputText)) {
      alert('해당 요소는 이미 존재합니다.');
      setInputText('');
      return;
    }
    //concat: 기존 배열에 새로운 요소를 추가하여 새로운 배열을 만드는 내장함수
    const nextNames = names.concat({ id: nextId, text: inputText });
    //기존 배열을 교체하는 작업
    setNames(nextNames);
    setNextId(nextId + 1); //id는 중복되면 안됨
    setInputText(''); //입력창을 비워줌
  };

  //정렬 기능 추가
  //오름차순(ㄱㄴㄷ)
  const sortAsscending = () => {
    //복제한 배열[...names]를 정렬 후 배열 교체작업 예정
    //sort: 정렬/ localeCompare: 요소 두개를 비교해서 정렬(작동 원리 다시 확인)
    const sortedNames = [...names].sort((a, b) => a.text.localeCompare(b.text));
    setNames(sortedNames);
  };
  //내림차순(ㄷㄴㄱ)
  const sortDescendin = () => {
    //복제한 배열[...names]를 정렬 후 배열 교체작업 예정
    //sort: 정렬/ localeCompare: 요소 두개를 비교해서 정렬(작동 원리 다시 확인)
    const sortedNames = [...names].sort((a, b) => b.text.localeCompare(a.text));
    setNames(sortedNames);
  };

  // //삭제 작업(기존 삭제)
  // const onRemove = (id) => {
  //   //filter: 배열을 순회하며 주어진 조건 함수가 true인 요소만 모아 새로운 배열을 만듬
  //   const nextNames = names.filter((name) => name.id !== id);
  //   setNames(nextNames);
  // };

  //삭제 작업(복구 가능하게 수정_실습1)
  const onRemove = (id) => {
    //삭제할 값을 찾음(find 함수 사용)
    const targetItem = names.find((name) => name.id === id);

    //삭제 여부 컨펌 후 진행
    if (
      confirm(`해당 요소를 삭제하시겠습니까? \n삭제할 요소: ${targetItem.text}`)
    ) {
      //삭제할 값을 찾은 후 위에 만들어둔 trash용 배열에 넣음
      setTrash([...trash, targetItem]);
      //마찬가지로 삭제할 데이터를 필터로 거르고(삭제하지 않는 객체들)
      //나머지 데이터는 names 활성목록에 넣음
      setNames(names.filter((name) => name.id !== id));
    }
  };

  //삭제 후 복구 작업
  const onRestore = (id) => {
    const restoreItem = trash.find((name) => name.id === id);

    if (
      confirm(
        `해당 요소를 복구하시겠습니까? \n복구할 요소: ${restoreItem.text}`,
      )
    ) {
      setNames([...names, restoreItem]);
      setTrash(trash.filter((name) => name.id !== id));
    }
  };

  // [수정 작업1: 실제 데이터 업데이트 로직]
  const onUpdate = (id, newText) => {
    // map을 사용해 전체 리스트를 순회하며 조건에 맞는 항목만 교체합니다.
    const updatedNames = names.map((name) =>
      // 조건: 수정하려는 id와 같으면?
      // { ...name, text: newText }: 기존 객체를 복사한 뒤(spread), text만 새로운 값으로 덮어씁니다.
      // 아니면? 기존 name 객체를 그대로 반환합니다.
      name.id === id ? { ...name, text: newText } : name,
    );

    // 리액트 상태 업데이트 (새로운 배열을 넣어줌으로써 렌더링 유발)
    setNames(updatedNames);
  };

  // [수정 순서2: 사용자 입력 및 상호작용 처리]
  const rightClick = (id, text) => {
    // prompt: 브라우저가 제공하는 간단한 입력창
    const newText = prompt('수정할 내용을 입력하세요.', text);

    // validation: 사용자가 값을 입력했는지 확인 (빈 값이나 공백만 입력한 경우 방지)
    if (newText && newText.trim()) {
      onUpdate(id, newText);
    }
  };

  // 리스트 영역 ---------------------------------------------------------
  const namesList = names.map((name) => (
    <li
      key={name.id}
      onDoubleClick={() => onRemove(name.id)}
      // onContextMenu: 사용자가 마우스 우클릭을 했을 때 발생하는 이벤트
      onContextMenu={() => rightClick(name.id, name.text)}
    >
      {name.text}
    </li>
  ));

  // --------------------------------------------------------------------

  return (
    <>
      <input
        value={inputText}
        onChange={onChange}
        placeholder="항목을 입력하세요"
      />

      <button onClick={onClick}>추가</button>
      <button onClick={sortAsscending}>오름차순</button>
      <button onClick={sortDescendin}>내림차순</button>

      <h1></h1>
      <h2>리스트</h2>
      <ul>{namesList}</ul>
      <h1></h1>
      <h2>휴지통</h2>
      <ul>
        {trash.map((item) => (
          <li key={item.id} onDoubleClick={() => onRestore(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IterationSample;

// --------------------------------------------------------------------

/*
스프레드 [...] */
