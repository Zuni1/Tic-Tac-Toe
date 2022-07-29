import React from 'react'
import Block from './Block'

export default function TicTacToe() {
    const [roll, setRoll] = React.useState(Array(9).fill(null))
    const [x, setX] = React.useState(true)

    const block = (i) => {
        return <Block value = {roll[i]} onClick = {() => handleChange(i)} />
    }

    const handleChange = (i) => {
        const val = roll.slice();
        if(val[i] === null){
            val[i] = x  ? "X" : 'O'
            setRoll(val)
            setX(!x)
        }
    }

    const winnerFun = (roll) => {
        let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i=0; i<win.length; i++){
            const [a,b,c] = win[i]
            if(roll[a] && roll[a] === roll[b] && roll[a] === roll[c]){
                return roll[a]
            }
        }
    }

    const win = winnerFun(roll)
    let turn;
    if(!win){
        turn = `Player turn: ${x ? 'X' : 'O'}`
    }

    const playAgain = () => {
        setRoll(Array(9).fill(null))
        
    }

    return(
        <>
        <div className = "container">
            <div className = 'row'>
                {block(0)}
                {block(1)}
                {block(2)}
            </div>
            <div className = 'row'>
                {block(3)}
                {block(4)}
                {block(5)}
            </div>
            <div className = 'row'>
                {block(6)}
                {block(7)}
                {block(8)}
            </div>
            <h3>{ !win ? turn : 
                <div>
                    <h3>{`${win} is a Winner!`}</h3>
                    <button onClick = {() => playAgain()} className = 'play-btn'>Play again</button>
                </div>}
            </h3>
        </div>
        </>
    )
}