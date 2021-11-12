import React from 'react';
import { Navbar } from './components/Navbar';
import './styles/style.css';

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <div className="container"></div>
    </>
  );
}


export default App;
