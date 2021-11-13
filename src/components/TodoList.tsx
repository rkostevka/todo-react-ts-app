
import React, { FC } from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
	todos: ITodo[],
	onToogle(id: number): void,
	onRemove(id: number): void
};

export const TodoList: FC<TodoListProps> = ({todos, onToogle, onRemove}) => {
	
	return (
		<ul>
			{todos.map(todo => {
				const classes = ['todo'];
				if(todo.completed) {
					classes.push('completed')
				}
				return (
					<li key={todo.id} className={classes.join(' ')}>
						<label htmlFor={todo.id.toString()}>
							<input type="checkbox" checked={todo.completed} onChange={() => onToogle(todo.id)} id={todo.id.toString()}/>
							<span>{todo.title}</span>
							<i className="material-icons red-text" onClick={() => onRemove(todo.id)}>
								delete
							</i>
						</label>
					</li>
				);
			})}
		</ul>
	)
}