import { TodoType } from "./TodoReducer";

export const saveTodos = (todos: TodoType[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export const loadTodos = () => {
  const todoJson = localStorage.getItem("todos");

  if(!todoJson) return []

  try {
    return JSON.parse(todoJson)
  } catch (err) {
    console.error(err)
    return []
  }
  
}