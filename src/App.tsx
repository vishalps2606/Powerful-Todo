import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './Todo';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';

function App() {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };  

  return (

    <DragDropContext onDragEnd={() => {}}>
        <div className='bg-info bg-gradient' style={{minHeight: '100vh'}}>
          <div className='text-center text-white display-5 fw-bold pt-5'>
            Todo App
          </div>
          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
          <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}  />
        </div>
    </DragDropContext>
  );
}

export default App;
