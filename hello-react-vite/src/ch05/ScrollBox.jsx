import { Component } from 'react';

class ScrollBox extends Component {
  //순서2
  // 스크롤을 맨 아래로 내리는 함수
  scrollToBottom = () => {
    // 1. 전체 높이(scrollHeight)와 보여지는 높이(clientHeight)를 가져옵니다.
    //scrollHeight=650(실제 전체 부분), clientHeight=300(눈에 보이는 부분)
    const { scrollHeight, clientHeight } = this.box;
    
    // 2. scrollTop을 '전체 높이 - 보여지는 높이'로 설정하면 맨 아래로 이동합니다.
    this.box.scrollTop = scrollHeight - clientHeight;
  };

   // 스크롤을 가운데로 이동하는 함수
  scrollToMiddel = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop =  (scrollHeight - clientHeight) / 2;
  }

  // 스크롤을 맨 위로 올라가는 함수
  scrollToTop = () => {
    this.box.scrollTop =  0
  }

  //스크롤의 위치값을 말할 땐 스크롤의 제일 위쪽을 기준으로 원하는 값을 넣으면 원하는 위치에 넣을 수 있다.
  //이름도 scroll"Top"임
 

  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          height: '300px',
          width: '300px',
          overflow: 'auto' // 이 설정 덕분에 내용이 넘치면 스크롤이 생깁니다.
        }}
        
        // 3. 콜백 ref: 컴포넌트가 렌더링될 때, 이 DOM 요소를 'this.box'에 저장합니다.
        ref={(ref) => {
          this.box = ref;
        }}
      >
        {/* 안쪽의 긴 div가 스크롤을 발생시키는 주범입니다. */}
        <div style={{
          height: '650px',
          background: 'linear-gradient(white, black)'
        }}
        />
      </div>
    );
  }
}

export default ScrollBox;