import React from "react";
import Square from "./Square";
import { LINES_WINNER } from "../constants";

const BoardRow = ({
  squares,
  boardSize,
  rowIndex,
  handleClick,
  winnerPath,
}) => {
  const elementsArr = [];

  for (let i = 0; i < boardSize; i++) {
    let currentPosition = i + boardSize * rowIndex;
    elementsArr.push(
      <Square
        key={i}
        value={squares[currentPosition]}
        isWinnerPath={
          winnerPath
            ? LINES_WINNER[winnerPath].includes(currentPosition)
            : false
        }
        onSquareClick={() => handleClick(currentPosition)}
      />
    );
  }

  return <div className="board-row">{elementsArr}</div>;
};

export default BoardRow;
