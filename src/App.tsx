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
    setTodos(prev => prev.map(item => {
      if(item.id === id) {
        item.completed = !item.completed;
      }
      return item
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Do you want to remove todo?');
    if(shouldRemove){
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
		<>
			<Navbar />
			<div className="container">
				<TodoForm onAdd={addHandler} />
				<TodoList
					todos={todos}
					onToogle={toogleHandler}
					onRemove={removeHandler}
				/>
			</div>
		</>
	);
}


export default App;
