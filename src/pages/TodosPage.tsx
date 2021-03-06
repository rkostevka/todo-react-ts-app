import React, { FC, useState, useEffect } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import { ITodo } from '../interfaces';

export const TodosPage: FC = () => {
	const [todos, setTodos] = useState<ITodo[]>([]);

	useEffect(() => {
		const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
		setTodos(saved);
	}, []);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	
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

	return(
		<>
			<TodoForm onAdd={addHandler} />
			<TodoList
				todos={todos}
				onToogle={toogleHandler}
				onRemove={removeHandler}
			/>
		</>
	)
}