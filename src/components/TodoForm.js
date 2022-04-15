import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todos'
import { v4 as uuidv4 } from 'uuid'

export default function TodoForm() {
  const inputRef = React.useRef(null)
  const formRef = React.useRef(null)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo({
      text: inputRef.current.value,
      id: uuidv4(),
      isDone: false
    }))
    formRef.current.reset()
  }

  return (
    <form className='m-3' onSubmit={handleSubmit} ref={formRef}>
      <input type="text" className="form-control" placeholder="example: Buy eggs" ref={inputRef} />
      <button className='btn btn-success mt-3'>add</button>
    </form>
  )
}
