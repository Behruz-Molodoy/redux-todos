import React from 'react'
import { useSelector } from 'react-redux'

export default function TodoFooter() {
  const todoItems = useSelector(state => state.todos)
  const handleSave = () => {
    localStorage.setItem('todos', JSON.stringify(todoItems))
  }

  return (
    <button className='btn btn-outline-primary' onClick={handleSave}>Save</button>
  )
}
