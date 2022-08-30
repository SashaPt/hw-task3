import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import AppRoutes from './AppRoutes';
import Context from '../context/context';
import Modal from './Modal/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      <div className="App">
        <NavBar />
        <div className="container">
          <AppRoutes />
        </div>
        <Modal />
      </div>
    </Context.Provider>
  );
}

export default App;
