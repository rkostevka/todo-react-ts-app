import React, { FC } from "react";
import {NavLink} from 'react-router-dom'

export const Navbar: FC = () => (
	<nav>
		<div className="nav-wrapper px-1">
			<a href="/" className="brand-logo">
				Todo App (React+TypeScript)
			</a>
			<ul id="nav-mobile" className="right hide-on-med-and-down">
				<li>
					<NavLink to="/">Todo List</NavLink>
				</li>
				<li>
					<NavLink to="/about">About us</NavLink>
				</li>
			</ul>
		</div>
	</nav>
);