const Grid = new Array(3).fill(0).map(() => new Array(3).fill(0));

const initialState = {
    gameStart: false,
    player1:{
        id:1,
        name: '',
        winStatus: false,
        gameWins: 0,
    },
    player2:{
        id:2,
        name: '',
        winStatus: false,
        gameWins: 0,
    },
    grid: Grid,
    turn: 1,
    matchStatus: 'Your Turn',
    counter:0
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case 'startGame':
            return {
                ...state,
                gameStart: !(state.gameStart),
                player1:{
                    ...state.player1,
                    name: action.payload.player1
                },
                player2:{
                    ...state.player2,
                    name: action.payload.player2
                }
            };
        case 'turn':
            return {
                ...state,
                turn: (state.turn==1?2:1)
            }    
        case 'matchStatus':
            return {
                ...state,
                matchStatus: action.payload.status,
                turn: (state.turn==1?2:1)
            }
        case 'winGame':
            {
                if(action.payload.player == 1)
                return {
                    ...state,
                    player1:{
                        ...state.player1,
                        gameWins: state.player1.gameWins + 1,
                        winStatus: true
                    }
                }
                else 
                return {
                    ...state,
                    player2:{
                        ...state.player2,
                        gameWins: state.player2.gameWins + 1,
                        winStatus: true,
                    }
                } 
            }   
        case 'setGrid':
            return {
                ...state,
                grid: action.payload.grid,
            }
        case 'counter':
            return {
                ...state,
                counter: action.payload.number
            }
        case 'draw':
            return {
                ...state,
                matchStatus: "DRAW",
                player1:{
                    ...state.player1,
                    gameWins: state.player1.gameWins + 1,
                    winStatus: true,
                },
                player2:{
                    ...state.player2,
                    gameWins: state.player2.gameWins + 1,
                    winStatus: true,
                }
            }
        case 'reSetGame':
            return {
                ...state,
                player1:{
                    ...state.player1,
                    winStatus: false,
                },
                player2:{
                    ...state.player2,
                    winStatus: false,
                },
                matchStatus: "Your Turn",
                grid: action.payload.grid,
                counter: 0,
                turn: 1
            }
        default: 
            return state
    }
}

export default reducer