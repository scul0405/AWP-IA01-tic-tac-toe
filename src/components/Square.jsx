import React from 'react'

const Square = ({ value, onSquareClick, isWinnerPath }) => {

    if (isWinnerPath) {
        return (
            <button className="square" style={{backgroundColor: 'green'}} onClick={onSquareClick}>
                {value}
            </button>
        )
    }

    return (
        <button className="square" onClick={onSquareClick}>
          {value}
        </button>
      );
}

export default Square