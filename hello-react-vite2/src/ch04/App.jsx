import React from 'react';
import EventPractice from './EventPractice';

// 부모 컴포넌트
const App = () => {
  return (
    <div>
      <h1>ch4-이벤트 핸들링</h1>
      {/* 자식 컴포넌트 : EventPractice , 그려주기 */}
      <EventPractice></EventPractice>
    </div>
  );
};

export default App;
