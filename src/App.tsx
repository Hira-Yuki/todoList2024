import { useReducer } from 'react';
import './App.css';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/TodoInputReducer';
import { todoReducer } from './Todo/TodoReducer';
import TodoProvider from './Todo/TodoProvider';

function App() {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: "" })
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] })

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: 'change',
      payload: text
    })
  }

  const handleSubmit = () => {
    if (!inputState.text) return

    todoDispatch({
      type: "add", payload: {
        text: inputState.text
      }
    })

    inputDispatch({
      type: 'clear'
    })
  }

  const handleRemove = (id: number) => {
    todoDispatch({
      type: "remove", payload: {
        id: id
      }
    })
  }

  const handleToggle = (id: number) => {
    todoDispatch({
      type: "checked", payload: {
        id: id
      }
    })
  }

  const isTodoAllChecked = () => todoState.todos.every(todo => todo.isChecked)

  const handleToggleAll = () => {
    todoDispatch({
      type: "allChecked", payload: isTodoAllChecked()
    })
  }

  const handleRemoveAll = () => {
    todoDispatch({
      type: "allRemove"
    })
  }

  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader count={todoState.todos.filter(todo => !todo.isChecked).length} />
        <TodoInput text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
        <TodoListArea todoCount={todoState.todos.length}>
          <TodoListTools onToggleAllClick={handleToggleAll} onRemoveAllClick={handleRemoveAll} isAllChecked={isTodoAllChecked()} />
          <Divider />
          <TodoList
            todos={todoState.todos}
            onRemoveClick={handleRemove}
            onToggleClick={handleToggle}
          />
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
