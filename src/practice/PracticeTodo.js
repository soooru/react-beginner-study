//todo 만들기

import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const toDoChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo('');
  };
  return (
    <div className="App">
      <h1>MY TODO ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={toDoChange}
          type="text"
          value={toDo}
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <div>
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
