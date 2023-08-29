import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../Todo'
import { AiFillEdit, AiFillDelete} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    index: number;
    todo:Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({index, todo, todos, setTodos}:Props) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        );
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    const handleEdit = (e:React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(
            todos.map((todo) => 
            (todo.id === id ? {...todo, todo: editTodo}: todo
        )));
        setEdit(false);
    }

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
    

  return (

    <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (            
            
            <form action="" className="form-control rounded-pill shadow d-flex justify-content-between px-4 my-2 py-2" onSubmit={(e) => handleEdit(e, todo.id)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>

                {
                    edit ? (
                        <input ref={inputRef} value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                        className='form-control rounded-pill w-75 shadow'/>
                    ) :
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
                    <span className='px-2 text-info' onClick={() => {
                        if(!edit && !todo.isDone){
                            setEdit(!edit);
                        }
                    }}>
                        <AiFillEdit/>
                    </span>
                    <span className='ps-2 text-danger' onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete/>
                    </span>
                </div>
            </form>
        )}
    </Draggable>
        
  )
}

export default SingleTodo