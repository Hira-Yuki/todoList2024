import { useEffect } from "react"
import { useTodoState } from "../../store/Todo/TodoProvider"
import styles from "./TodoHeader.module.css"
import { saveTodos } from "../../store/Todo/todoStorage"

const TodoHeader = () => {
  const todoState = useTodoState()
  const count = todoState.todos.filter(todo => !todo.isChecked).length

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveTodos(todoState.todos);
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    }
  }, [todoState])

  return (
    <header>
      <h1 className={styles.headerTitle}>
        <mark className={styles.todoCount}>{count}</mark>개의 할일
      </h1>
    </header>
  )
}

export default TodoHeader