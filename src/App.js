import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    props.onSubmit(input);
    setInput("");
  }

  return (
    <div>
      <TextField
        id="todo-item-input"
        label="Todo Item"
        variant="outlined"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
      <Button variant="outlined" onClick={onSubmit}>Submit</Button>
    </div>
  );
}

const TodoItemList = (props) => {
  return (
    <div></div>
  )
}

function App() {
  return (
    <div className="App">
      <TodoItemInputField onSubmit={(input) => {console.log(input)}} />
      <TodoItemList />
    </div>
  );
}

export default App;

