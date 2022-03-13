import React from 'react'

export default function Form({todos, setTodos, inputText, setInputText}) {
const InputTextHandler= (e)=>{
  e.preventDefault();
  console.log(e.targetvalue);
  setInputText(e.target.value);
};
const submitTodoHandler =(e)=>
e.preventDefault();
};

}
  return (
    <form>
        <input onChange={InputTextHandler} type="text" className='todo-input' />
        <button onClick={NewTaskHandler} className="todo-button" type="submit">
          <i className='fas fa-plus-square'></i>
       </button>
       <div className="select">
         <select name="todos" className="filter-todo">
           <option value="all">All</option>
           <option value="completed">Completed</option>
           <option value="uncompleted">Uncompleted</option>
           </select>
       </div>
    </form>
  );
};

