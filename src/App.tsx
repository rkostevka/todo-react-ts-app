import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { ITodo } from './interfaces';
import './styles/style.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    //setTodos([...todos, newTodo]);
    setTodos((prev) => [newTodo, ...prev])
  }

  const toogleHandler = (id: number) => {

  }

  cinst renoveHandler = (id: number) => {
    
  }

  return (
		<>
			<Navbar />
			<div className="container">
				<TodoForm onAdd={addHandler} />
        <TodoList todos={todos}/>
			</div>
		</>
	);
}


export default App;
