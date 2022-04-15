import { todoTypes } from "../contstans/todos";

export const addTodo = (todoItem) => ({
  type: todoTypes.ADD_TODO,
  payload: {
    ...todoItem
  }
})

export const removeItem = (id) => {
  return {
    type: todoTypes.REMOVE_TODO,
    payload: {
      id
    }
  }
}

export const markTodoDone = (todoItem) => {
  return {
    type: todoTypes.MARK_TODO_DONE,
    payload: {
      ...todoItem
    }
  }
}

export const initalizeStore = (todos) => {
  return {
    type: todoTypes.INITALIZE_STORE,
    payload: [
      ...todos
    ]
  }
}