import React from 'react'
import { Todo } from '../../../typings';
// this is doing same job as server side rendering

type PageProps = {
    params:{
        todoId:string
    }
}


const fetchTodo = async (todoId: string) => {
    //call to 3rd party url 

    const res = await fetch(
        // revalidate it number of seconds
        `https://jsonplaceholder.typicode.com/todos/${todoId}`, {next: {revalidate:60}}
    );

    const todo = await res.json()
    return todo;

};


const TodoPage = async({params:{todoId}}:PageProps) => {

    const todo:Todo  = await fetchTodo(todoId);
  return (
<div className='p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
    <p>
        #{todo.id}: {todo.title}
    </p>
    <p> Completed: {todo.completed ? "Yes" : "No"}</p>
    <p className='border-t border-black mt-5 text-right'>
        By User: {todo.userId}
    </p>
</div>

  
  )
}

export default TodoPage