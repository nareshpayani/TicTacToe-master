import React, { useState } from 'react';
import "../App.css"
import { useDispatch} from 'react-redux'
import { startGame, addNames } from '../redux/actions';

function Welcome() {
  const dispatch = useDispatch()

  const [player1, setPlayer1] = useState('Naresh');
  const [player2, setPlayer2] = useState('Payani');

  return (
    <>
      <div className="NameBox">
        <div className="BoxLeft">Welcome to</div>
        <div className="BoxRight">Tic Tac Toe</div>
      </div>
      <div className="PlayerOneBox">
        <div className="PlayerOneText">PLAYER 1</div>
        <input className="PlayerOneName" type="text" value={player1} onChange={(e)=> setPlayer1(e.target.value) } />
      </div>
      <div className="PlayerTwoBox">
        <div className="PlayerTwoText">PLAYER 2</div>
        <input className="PlayerTwoName" type="text" value={player2} onChange={(e)=> setPlayer2(e.target.value)}/>
      </div>
      <div className="Continue" onClick={() => {
            dispatch(startGame(player1,player2));
          }} >
        <div className="ContinueText">Continue</div>
      </div>
      
    </>
  );
}

export default Welcome;
