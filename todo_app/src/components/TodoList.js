import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { API_URL } from '../constants';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setTodoList(data);
      });
  }, []);

  const onInputChange = (e) => setTitle(e.target.value);

  const onItemAdd = (event) => {
    event.preventDefault();

    const newTodo = {
      title,
      completed: false,
    };

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo),
    })
      .then((resp) => resp.json())
      .then((data) => setTodoList((prevTodoList) => [...prevTodoList, data]));
    event.target[0].value = '';
  };

  const onTodoUpdate = (id) => {
    const item = todoList.find((todoItem) => todoItem.id === id);
    const newItem = { ...item, completed: !item.completed };
    fetch(API_URL + '/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItem),
    });
    setTodoList(todoList.map((item) => (item.id === id ? newItem : item)));
  };

  const onTodoDelete = (id) => {
    fetch(API_URL + '/' + id, {
      method: 'DELETE',
    });
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <ul>
        {todoList.map((todoItem) => {
          return (
            <TodoItem key={todoItem.id} onTodoUpdate={onTodoUpdate} onTodoDelete={onTodoDelete} todoItem={todoItem} />
          );
        })}
      </ul>
      <form action="" onSubmit={onItemAdd}>
        <legend>Write new Todo</legend>
        <div className="input">
          <input type="text" value={todoList.title} onChange={onInputChange} />
          <button>Add</button>
        </div>
      </form>
    </>
  );
}
