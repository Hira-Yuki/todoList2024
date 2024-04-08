import { ReactNode } from "react"
import { useTodoState } from "../../store/Todo/TodoProvider"

interface TodoListAreaProps {
  children: ReactNode
}

// HOC high order component
const TodoListArea = (props: TodoListAreaProps) => {
  const todoState = useTodoState()
  
  if (todoState.todos.length < 1) return null

  return (
    <>
      {props.children}
    </>
  )
}

export default TodoListArea