import React from 'react';
import '../App.css';
import ResultBox from './ResultBox'
import { useSelector } from 'react-redux';

function ThirdPage() {

    const state = useSelector(state => state);

    let player = state.player1.gameWins > state.player2.gameWins ? state.player1: state.player2
    let isDraw = state.player1.gameWins == state.player2.gameWins
    
  return (
    <div className="App">
      <div className="GameName"></div>
      <div className="DashBorder"></div>
      <div className="MainRectangle">
        { 
            !isDraw ? <ResultBox Player={player.id} name={player.name} />
            :<div className="ResultBox">
                <div className="Winner">DRAW</div>
                <div className="ResultBoxPlayerImg" style={{top:"40px"}}></div>
                <div className="ResultPlayerCircle" ></div>
            </div>
        }
      </div>
    </div>
  );
}

export default ThirdPage;
