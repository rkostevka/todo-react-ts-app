import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const AboutPage: FC = () => {
	const history = useNavigate();
	return(
		<>
			<h1>About Todo App</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam officia alias provident dolor ab laborum debitis a culpa asperiores saepe explicabo vel eius, molestiae sed aspernatur voluptatem maxime et ipsum.
			</p>
			<button className="btn" onClick={() => history('/')}>Back todos</button>
		</>
	)
}