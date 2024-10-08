import { useState } from 'react';
import Board from './components/Board';
import { BOARD_SIZE } from './constants';
import ToggleSwitch from './components/ToggleSwitch';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [historyPosition, setHistoryPosition] = useState([])
  const [isMoveDescending, setIsMoveDescending] = useState(false)
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares, nextHistoryPosition) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    const newHistoryPosition = [...historyPosition, nextHistoryPosition];
    setHistoryPosition(newHistoryPosition)
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setHistoryPosition([...historyPosition.slice(0, nextMove)])
  }

  let moves = history.slice(0, currentMove + 1).map((squares, move) => {
    const currentPosition = historyPosition[move - 1]
    const row = Math.floor(currentPosition / BOARD_SIZE) + 1
    const col = currentPosition % BOARD_SIZE + 1

    let description;
    if (move > 0) {
      if (move === currentMove) {
        return (
          <li key={move}>
            <span>{`You are at move #${move}: row - ${row}, column - ${col}`}</span>
          </li>
        )
      }

      description = `Go to move #${move}: row - ${row}, column - ${col}`;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  if (isMoveDescending) {
    moves = moves.reverse()
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} currentMove={currentMove}/>
      </div>
      <div className="game-info">
        <ToggleSwitch label={"Moves Descending"} isMoveDescending={isMoveDescending} setIsMoveDescending={setIsMoveDescending}/>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}