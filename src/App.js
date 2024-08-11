import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';

const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <TextField
        id="todo-item-input"
        label="Todo Item"
        variant="outlined"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoItemInputField />
    </div>
  );
}

export default App;
