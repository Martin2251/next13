import React from 'react'
import { Todo } from '../../typings';

const fetchTodos =  async () =>{
    // call to an external api 

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[ ] = await res.json();
}

const TodosList = () => {
  return (
    <div>TodosList</div>
  )
}

export default TodosList