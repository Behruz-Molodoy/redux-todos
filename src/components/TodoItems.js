import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

export default function TodoItems() {
  const todos = useSelector(state => state.todos)

  return (
    <ul className="list-group list-group-flush">
      {todos.length
        ? todos.map(item => (
          <TodoItem key={item.id} text={item.text} id={item.id} isDone={item.isDone}/>
        ))
        : <h3 className='text-danger text-center'>No</h3>
      }
    </ul>
  )
}
