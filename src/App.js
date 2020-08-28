import React from 'react';
import './App.css';
import FirstPage from './Components/FirstPage';
import SecondPage from './Components/SecondPage';
import { useSelector } from 'react-redux';

function App() {

  const start = useSelector(state => state)
  
  return (
    (!start.gameStart) ? <FirstPage /> : <SecondPage />
  );

}

export default App;
