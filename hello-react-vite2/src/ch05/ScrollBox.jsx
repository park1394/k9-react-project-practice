import { Component } from 'react';

class ScrollBox extends Component {
  // 순서2
  // 맨밑으로 이동하는 함수.
  scrollToBottom = () => {
    /* 위 코드는 비구조화 할당 문법을 사용한 것입니다.
           아래 코드는 같은 의미입니다:
           scrollHeight : 650px
           clientHeight : 300px
           const scrollHeight = this.box.scrollHeight;
           const clientHeight = this.box.clientHeight;
        */
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  //scrollToTop , 으로 함수를 생성해서, 맨위로 올라가는 버튼을 만들어서 적용해보기.
  //scrollToMiddle , 으로 함수를 생성해서, 가운데로 이동는 버튼을 만들어서 적용해보기.

  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          height: '300px',
          width: '300px',
          overflow: 'auto',
        }}
        // 순서1
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div
          style={{
            height: '650px',
            background: 'linear-gradient(white, black)',
          }}
        />
      </div>
    );
  }
}

export default ScrollBox;
