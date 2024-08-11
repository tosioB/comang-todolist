import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
      <Button variant="outlined">Submit</Button>
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
