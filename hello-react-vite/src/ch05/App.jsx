import { Component } from 'react';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
    render() {
        return (
            <div>
                <h1>ch05 dom에 ref달기</h1>
                <h2>간단한 유효성 체크 확인</h2>
                <ValidationSample></ValidationSample>
                <h2>연습3, 스크롤에 rdf달기, 제어 연습</h2>
                <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                    
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                맨 밑으로
                </button>

                <button onClick={() => this.scrollBox.scrollToMiddel()}>
                가운데로
                </button>

                <button onClick={() => this.scrollBox.scrollToTop()}>
                맨 위로
                </button>
                
            </div>
        );
    }
}

export default App;