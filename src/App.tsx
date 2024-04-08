import './App.css';
import { Divider, TodoHeader, TodoInput, TodoList, TodoListTools, TodoListArea } from './components';
import TodoProvider from './store/Todo/TodoProvider';

function App() {

  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <Divider />
          <TodoList />
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
