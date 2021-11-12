import React, { FC } from "react";

export const Navbar: FC = () => (
	<nav>
		<div className="nav-wrapper px-1">
			<a href="/" className="brand-logo">
				Todo App (React+TypeScript)
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<a href="/">Todo List</a>
				</li>
				<li>
					<a href="/">About us</a>
				</li>
			</ul>
		</div>
	</nav>
);