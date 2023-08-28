import React from 'react'
import { Todo } from '../Todo';
import SingleTodo from './SingleTodo';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='container'>
        {todos.map((todo) => (
            <div className="row d-flex">
                <SingleTodo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                />
            </div>
        ))}
    </div>
  )
}

export default TodoList