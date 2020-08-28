
export const startGame = (player1,player2) => ({
    type: "startGame",
    payload:{
        player1,
        player2
    }
});

export const turn = () => ({
    type: "turn",
});

export const matchStatus = (status) => ({
    type: "matchStatus",
    payload:{
        status: status
    }
});

export const winGame = (p) => ({
    type: "winGame",
    payload:{
        player: p
    }
});

export const setGrid = (grid) => ({
    type: "setGrid",
    payload:{
        grid: grid
    }
});

export const counter = (number) => ({
    type: "counter",
    payload:{
        number:number
    }

});

export const draw = () => ({
    type: "draw",
});

export const reSetGame = (grid) => ({
    type: "reSetGame",
    payload:{
        grid: grid
    }

});
