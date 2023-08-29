import React from 'react'
import { Todo } from '../Todo';
import SingleTodo from './SingleTodo';
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className='container'>

        <div className="row d-flex justify-content-evenly">

        <Droppable droppableId="TodosAdd">{
            (provided) => (
                <div 
                className="col-md-5 bg-warning my-4 rounded shadow" 
                ref={provided.innerRef}
                {...provided.droppableProps}>
                    <p className="display-6  text-center my-3 text-white">Active Tasks </p>
                    {todos.map((todo) => (
                            <SingleTodo
                                todo={todo}
                                key={todo.id}
                                todos={todos}
                                setTodos={setTodos}
                            />
                    ))}
                </div>
            )
        }

        </Droppable>

        <Droppable droppableId='TodosRemove'>
            {
                (provided) => (
                    <div className="col-md-5 bg-success my-4 rounded shadow">
                        <p className="display-6 my-3 text-center text-white">Completed Tasks </p>
                    </div>
                )
            }
            
        </Droppable>
            
            
        </div>
    </div>
  )
}

export default TodoList