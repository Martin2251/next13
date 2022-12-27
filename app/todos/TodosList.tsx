import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fetchTodos =  async () =>{
    // call to an external api 

    const res = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const todos: Todo[ ] = await res.json();
    console.log("This is the todsos", todos);
    return todos;
};

 const TodosList = async () => {
    const todos = await fetchTodos();
  return (
    <>
    {todos.map((todo) => (
        <p key={todo.id}>
            <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>

        </p>
    ))}
    
    </>
  )
}

export default TodosList