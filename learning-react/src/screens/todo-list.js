import React, {useState} from 'react';

const TodoListScreen = () => {

  const [ todoList, updateToDoList ] = useState([]);
  const [message, updateMessage] = useState("");

  const onHandleInput = (event) => {
    updateMessage(event.target.value);
  }

  const addToDoMessage = () => {
    updateToDoList([...todoList, message]);
    updateMessage("");
  }

  const deleteToDoMessage = (index) => {
    todoList.splice(index, 1);
    updateToDoList([...todoList]);
  }

  const toDoResult = todoList.map( (value, index) => {
    return(
      <li key={index}>
        <span>{value}</span>
        <button onClick={() => deleteToDoMessage(index)}>X</button>
      </li>
    )
  })

  return (
    <div>
      <h2>Enter your ToDo List</h2>
      <input type='text' placeholder='Enter ToDo Message' onChange={onHandleInput} value={message} />
      <button onClick={() => addToDoMessage()}>Add Message</button>
      <ol>
        {toDoResult}
      </ol>
    </div>
  );
};

export default TodoListScreen;