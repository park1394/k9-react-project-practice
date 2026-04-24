import './App.css';

function App() {
  const name = '오늘 점심 뭐 먹죠?';
  const name2 = '리액트2';

  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <p>JSX 안에서 자바스크립트 표현식을 통해 {} 안에 코드를 넣으면 됩니다.</p>

      <div>
        <p>2.4.3 If 문 대신 조건부 연산자 (삼항 연산자)</p>
        {name2 === '리액트' ? (
          <h1>리액트입니다.</h1>
        ) : (
          <h2>리액트가 아닙니다.</h2>
        )}
      </div>
      <div>{name2 === '리액트2' && <h1>리액트2입니다.</h1>}</div>
    </>
  );
}

export default App;
