import React from 'react'

export default function TodoHeader({length = 0}) {  
  return (
    <h1>Todos: <span className='text-danger'>{length}</span></h1>
  )
}
