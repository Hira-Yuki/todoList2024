import { ReactNode, createContext } from "react"

interface TodoProviderProps {
  children: ReactNode
}

const TodoStateContext = createContext(null)
const InputTodoContext = createContext(null)

const TodoProvider = (props: TodoProviderProps) => {
  return (
    <>
      {props.children}
    </>
  )
}

export default TodoProvider