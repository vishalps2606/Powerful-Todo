import React from 'react'
import { Todo } from '../Todo'
import { AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'

type Props = {
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo, todos, setTodos}:Props) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        );
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

  return (
        <div className="col-md-6">
        <form action="" className="form-control rounded-pill shadow d-flex justify-content-between px-4 mt-4 py-2">

            {
                todo.isDone ? (
                    <s className='lead'>{todo.todo}</s>

                ):(
                    <span className='lead'>{todo.todo}</span>
                )
            }

            <div style={{fontSize: 20}}>
                <span className='px-2 text-success' onClick={() => handleDone(todo.id)}>
                    <MdDone/>
                </span>
                <span className='px-2 text-info'>
                    <AiFillEdit/>
                </span>
                <span className='ps-2 text-danger' onClick={() => handleDelete(todo.id)}>
                    <AiFillDelete/>
                </span>
            </div>
        </form>
        </div>    
  )
}

export default SingleTodo