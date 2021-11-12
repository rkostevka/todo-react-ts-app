import React, { ChangeEvent, FC, KeyboardEvent, useState } from "react";

export const TodoForm: FC = () => {

	const [title, setTitle] = useState<string>('');

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	}

	const keyPressHandler = (event: KeyboardEvent) => {
		if (event.key === "Enter") {
			console.log(title);
			setTitle('');
		}
	}

	return (
		<div className="input-field">
			<input
				value={title}
				onChange={changeHandler}
				type="text"
				id="title"
				placeholder="Input todo title"
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor="title" className="active">
				Input todo title
			</label>
		</div>
	);
}