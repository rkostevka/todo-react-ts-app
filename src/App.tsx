import "./styles/style.css";
import React, {FC} from "react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: FC = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<TodosPage />} />
					<Route path="/about" element={<AboutPage/>}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
