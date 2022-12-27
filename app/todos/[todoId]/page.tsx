import React from 'react'

type PageProps = {
    params:{
        todoId:string
    }
}


const TodoPage = ({params:{todoId}}:PageProps) => {
  return (
    <div>TodoPage : {todoId}</div>
  )
}

export default TodoPage