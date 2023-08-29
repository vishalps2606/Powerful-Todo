import React from 'react'


interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  return (
    <div className="container mt-5">
        <form className="d-flex " role="search" onSubmit={handleAdd}>
            <input className="form-control shadow rounded-pill me-2 py-2 ps-4" type="search" 
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter a Task" />
            <button className="btn btn-secondary rounded-pill shadow" type="submit" >Add</button>
        </form>
    </div>
    
  )
}

export default InputField