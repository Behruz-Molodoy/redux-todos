import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoFooter, TodoForm, TodoHeader, TodoItems } from './components'
import { initalizeStore } from './redux/actions/todos'

export default function App() {
  const todoItems = useSelector(state => state.todos)
  const dispatch = useDispatch()

  React.useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))

    if (localStorage.getItem('todos')) {
      dispatch(initalizeStore(todos))
    }
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <div className="card-header">
              <TodoHeader length={todoItems.length} />
            </div>
            <TodoForm />
            <div className="card-body">
              <TodoItems />
            </div>
            <div className="card-footer">
              <TodoFooter />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
