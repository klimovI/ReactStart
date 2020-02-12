import React from 'react';
import List from './Components/List/List'

function App() {
  const items = [1,2,3,4,5,6,7,8,9,10,11];

  return (
    <div className='wrapper'>
      <h1>React</h1>

      <List items = {items} />
    </div>
  );
}

export default App;
