import React from 'react';
import '../App.css';
import Welcome from './Welcome';

function FirstPage() {
  return (
    <div className="App">
      <div className="GameName"></div>
      <div className="DashBorder"></div>
      <div className="MainRectangle"></div>
      <Welcome />
    </div>
  );
}

export default FirstPage;
