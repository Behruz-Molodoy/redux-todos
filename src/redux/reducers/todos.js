import { todoTypes } from "../contstans/todos"

const initalState = []

export default function todos(state = initalState, action) {
  switch (action.type) {
    case todoTypes.ADD_TODO:
      return [
        ...state,
        action.payload
      ]
    case todoTypes.REMOVE_TODO:
      return state.filter(item => item.id !== action.payload.id)
    case todoTypes.MARK_TODO_DONE:
      return state.map(item => {
        if (action.payload.id === item.id) {
          return {
            ...item,
            isDone: action.payload.isDone
          }
        }
        else {
          return item
        }
      })
      case todoTypes.INITALIZE_STORE : 
      return [
        ...action.payload
      ]
    default:
      return state
  }
}