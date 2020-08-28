import React from 'react';
import '../App.css';
import { useSelector,useDispatch } from 'react-redux';
import { reSetGame} from '../redux/actions';

import CheckBox from './CheckBox';
import PlayerBox from './PlayerBox';
import ThirdPage from './ThirdPage';

function SecondPage() {

  const state = useSelector(state => state);
  const dispatch = useDispatch()

  if(state.player1.gameWins==6 || state.player2.gameWins==6)
  {
    return <ThirdPage />
  }
  else
  {
    return (
      <div className="App">
        <div className="GameName"></div>
        <div className="DashBorder"></div>
        <div className="MainRectangle">
          <CheckBox />
        </div>
        <PlayerBox Player= {1} Num={state.player1.gameWins} name={state.player1.name} marginL={"10%"} Message={state.matchStatus=="DRAW"?"DRAW":(state.turn == 1?state.matchStatus:'')} border={state.player1.winStatus} />
        <PlayerBox Player= {2} Num={state.player2.gameWins} name={state.player2.name} marginR={"10%"} Message={state.matchStatus=="DRAW"?"DRAW":(state.turn == 2?state.matchStatus:'')} border={state.player2.winStatus} />  
        
        {
          ( state.matchStatus=="WINNER" || state.matchStatus=="DRAW") ? 
          ( <div className="NewGame" onClick={() => 
              {
                dispatch(reSetGame(new Array(3).fill(0).map(() => new Array(3).fill(0))))
              }}>
              <div className="NewGameText" >New Game</div>
            </div>
          ) : 
          ''
        }
      </div>
    );
  }

}
export default SecondPage;
