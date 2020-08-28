import React from 'react';
import "../App.css"

function PlayerBox(props) {
    
    let circles = []
    let number = props.Num
    
    for(let i = 0 ; i< 6 ; i++)
    {
        if(number > 0)
        {
            circles[i] = <div className="Circle" style={{backgroundColor: "#ffffff"}}></div>
            number--;
        }
        else
            circles[i] = <div className="Circle" style={{}}></div>;
    }

  return (
    <>
      <div className="Box" style={{left: props.marginL, right: props.marginR,  border: props.border? "3px solid #FB9E01":''}}>
        <div className="Turn">{props.Message}</div>
        <div className="BoxPlayer" >PLAYER {props.Player}</div>
        <div className="BoxPlayerName" >{props.name}</div>
        {props.Player==1? <div className="BoxPlayerImg" ></div> : <div className="PlayerCircle" style={{}}></div>} 
        <div className="CircleLine">
            {circles}
        </div>
      </div>
    </>
  );
}

export default PlayerBox;
