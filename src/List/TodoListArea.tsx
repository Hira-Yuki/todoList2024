import { ReactNode } from "react"

interface TodoListAreaProps {
  children: ReactNode
  todoCount: number
}

// HOC high order component
const TodoListArea = (props: TodoListAreaProps) => {
  if (props.todoCount < 1) return null

  return (
    <>
      {props.children}
    </>
  )
}

export default TodoListArea