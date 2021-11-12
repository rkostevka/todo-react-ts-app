import React from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <TodoForm/>

      </div>
    </>
  );
}


export default App;
