import React from 'react';
import "../App.css"

function ResultBox(props) {
   
  return (
    <>
      <div className="ResultBox" >
        <div className="Winner"> WINNER </div>
        <div className="ResultBoxPlayer" >PLAYER {props.Player}</div>
        <div className="ResultBoxPlayerName" >{props.name}</div>
        {props.Player==1? <div className="ResultBoxPlayerImg" ></div> : <div className="ResultPlayerCircle" style={{}}></div>} 
      </div>
    </>
  );
}

export default ResultBox;
