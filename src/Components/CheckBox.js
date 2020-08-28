import React, { useState, useDebugValue } from 'react';
import "../App.css"
import background1 from "../img/closelg.png"
import background2 from "../img/closeColor.png"
import { useSelector, useDispatch } from 'react-redux';
import { turn, matchStatus, winGame,setGrid, counter,draw } from '../redux/actions';

const CheckWin = (grid,n) =>{

    for(let i= 0 ; i<3 ;i++)
        if( grid[i][0]==n && grid[i][1]==n && grid[i][2]==n )
            return [i.toString()+"0",i.toString()+"1",i.toString()+"2",n];
    for(let j= 0 ; j<3 ;j++)
        if( grid[0][j]==n && grid[1][j]==n && grid[2][j]==n )
            return ["0"+j.toString(),"1"+j.toString(),"2"+j.toString(),n];

    if( grid[0][0]==n && grid[1][1]==n && grid[2][2]==n )
            return ["00","11","22",n];

    if( grid[0][2]==n && grid[1][1]==n && grid[2][0]==n )
        return ["02","11","20",n];

    return []
}

function CheckBox() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    
    const [gameOver,setGameOver] = useState([])
    
    let grid = state.grid
    const boxes = []
    
    if(gameOver.length==0)
    {
        for(var i=0; i<3; i++)
            for(var j=0; j<3 ; j++)
            {
                if(grid[i][j]==0)
                    boxes.push(<div id={[i,j]} className="GridImg" onClick=
                    {
                        (e)=>
                            { 
                                if(state.turn==1)
                                    grid[e.target.id[0]][e.target.id[2]] = 1;
                                else
                                    grid[e.target.id[0]][e.target.id[2]] = 2;
                                dispatch(setGrid(grid)) 
                                dispatch(turn())
                                dispatch(counter(state.counter+1))
                                let res = CheckWin(grid,state.turn==1?1:2)
                                if(res.length!=0)
                                {
                                    dispatch(matchStatus("WINNER"))
                                    dispatch(winGame(state.turn))
                                }
                                else if(state.counter+1==9)
                                {
                                    dispatch(matchStatus("DRAW"))
                                    dispatch(winGame(1))
                                    dispatch(winGame(2))
                                }
                                setGameOver(res)
                            }
                    } ></div>) 
                else if (grid[i][j]==1)    
                    boxes.push(<div  className="GridImg"  style={{ backgroundImage:  `url(${background1})`}}></div>) 
                else if(grid[i][j]==2)
                    boxes.push(<div className="GridImg"  style={{}}><div className="GridCircle" style={{}}></div></div>)
            
            }
    }  
    else if(gameOver.length!=0 && state.matchStatus=="Your Turn")
    {
        setGameOver([])
        for(var i=0; i<3; i++)
            for(var j=0; j<3 ; j++)
            {
                if(grid[i][j]==0)
                    boxes.push(<div id={[i,j]} className="GridImg" onClick=
                    {
                        (e)=>
                            { 
                                if(state.turn==1)
                                    grid[e.target.id[0]][e.target.id[2]] = 1;
                                else
                                    grid[e.target.id[0]][e.target.id[2]] = 2;
                                dispatch(setGrid(grid)) 
                                dispatch(turn())
                                dispatch(counter(state.counter+1))
                                let res = CheckWin(grid,state.turn==1?1:2)
                                if(res.length!=0)
                                {
                                    dispatch(matchStatus("WINNER"))
                                    dispatch(winGame(state.turn))
                                }
                                else if(state.counter+1==9)
                                {
                                    dispatch(draw())
                                }
                                setGameOver(res)
                            }
                    } ></div>) 
                else if (grid[i][j]==1)    
                    boxes.push(<div  className="GridImg"  style={{ backgroundImage:  `url(${background1})`}}></div>) 
                else if(grid[i][j]==2)
                    boxes.push(<div className="GridImg"  style={{}}><div className="GridCircle" style={{}}></div></div>)
            
            }
    }
    else if(gameOver.length!=0 )
    {
        for(var i=0; i<3; i++)
            for(var j=0; j<3 ; j++)
            {
                if(grid[i][j]==0)
                    boxes.push(<div id={[i,j]} className="GridImg" ></div>) 
                else if( grid[i][j]==1 && gameOver.includes(i.toString()+j.toString()))
                    boxes.push(<div  className="GridImg"  style={{ backgroundImage:  `url(${background2})`}}></div>) 
            else if (grid[i][j]==1)    
                    boxes.push(<div  className="GridImg"  style={{ backgroundImage:  `url(${background1})`}}></div>) 
                else if(grid[i][j]==2 && gameOver.includes(i.toString()+j.toString()))
                    boxes.push(<div className="GridImg"  style={{}}><div className="GridCircle" style={{borderColor: "#FB9E01"}}></div></div>)
                else if(grid[i][j]==2)
                    boxes.push(<div className="GridImg"  style={{}}><div className="GridCircle" style={{}}></div></div>)
            }
    }
    
  return (
    <>
        <div className="Line1"></div>
        <div className="Line2"></div>
        <div className="Line3"></div>
        <div className="Line4"></div>
        <div class="grid">
            {boxes}
        </div>
    </>
  );
}

export default CheckBox;
