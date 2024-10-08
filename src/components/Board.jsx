import React, { useState } from "react";
import BoardRow from "./BoardRow";
import { BOARD_SIZE, LINES_WINNER } from "../constants";

const Board = ({ xIsNext, squares, onPlay, currentMove }) => {
  let line = null;

  function calculateWinner(squares) {
    const lines = LINES_WINNER;
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        line = i;
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares, i);
  }

  let winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  if (!winner && currentMove == BOARD_SIZE * BOARD_SIZE) {
    alert("DRAW!");
    status = "DRAW!";
  }

  const board = [];
  for (let i = 0; i < BOARD_SIZE; i++) {
    board.push(
      <BoardRow
        key={`board-row-${i}`}
        squares={squares}
        boardSize={BOARD_SIZE}
        rowIndex={i}
        handleClick={handleClick}
        winnerPath={line}
      />
    );
  }

  return (
    <>
      <div className="status">{status}</div>
      {board}
    </>
  );
};

export default Board;
