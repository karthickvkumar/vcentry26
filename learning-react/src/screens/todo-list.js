import React, {useState} from 'react';

const TodoListScreen = () => {

  const [ todoList, updateToDoList ] = useState([]);
  const [message, updateMessage] = useState("");

  const onHandleInput = (event) => {
    updateMessage(event.target.value);
  }

  const addToDoMessage = () => {
    updateToDoList([...todoList, message]);
  }

  const toDoResult = todoList.map( (value, index) => {
    return(
      <li key={index}>{value}</li>
    )
  })

  return (
    <div>
      <h2>Enter your ToDo List</h2>
      <input type='text' placeholder='Enter ToDo Message' onChange={onHandleInput} />
      <button onClick={() => addToDoMessage()}>Add Message</button>
      <ol>
        {toDoResult}
      </ol>
    </div>
  );
};

export default TodoListScreen;