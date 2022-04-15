import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markTodoDone, removeItem } from '../redux/actions/todos'

export default function TodoItem({ text, id, isDone }) {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const handleMarkTodo = (e) => {
    dispatch(markTodoDone({
      id,
      text,
      isDone: e.target.checked
    }))
  }

  return (
    <li
      className='list-group-item d-flex justify-content-between align-items-center my-1'
      style={isDone ? { background: 'orange', borderRadius: '12px', transition: 'all 500ms ease-in-out' } : null}>
      <div>
        <input onChange={handleMarkTodo} type="checkbox" className='form-check-input me-3' />
        <label className={isDone ? 'text-decoration-line-through text-white' : null}>{text}</label>
      </div>
      <button className='btn btn-danger' onClick={() => dispatch(removeItem(id))}>remove</button>
    </li>
  )
}
