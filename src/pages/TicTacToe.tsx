// src/App.js
import React, { useState } from "react"
import Navbar from "../components/Navbar"

const initialBoard = Array(9).fill(null)

const App = () => {
  const [board, setBoard] = useState(initialBoard)
  const [isXNext, setIsXNext] = useState(true)

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }

    return null
  }

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = isXNext ? "X" : "O"

    setBoard(newBoard)
    setIsXNext(!isXNext)
  }

  const renderSquare = (index) => (
    <button
      className="bg-white border border-gray-300 rounded-md shadow-md h-12 w-12 flex items-center justify-center text-2xl cursor-pointer"
      onClick={() => handleClick(index)}
    >
      {board[index]}
    </button>
  )

  const winner = calculateWinner(board)
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`

  return (
    <>
      <Navbar/>
      <h1 className="text-center text-blus font-bold text-4xl mt-10">Tic Tac Toe</h1>
      <div className="text-lg text-center font-semibold mt-10">{status}</div>
      <div className="flex justify-center items-center mt-5">
        <div className="grid grid-cols-3 gap-1">
          {Array(9)
            .fill(null)
            .map((_, index) => (
              <div key={index}>{renderSquare(index)}</div>
            ))}
        </div>
      </div>
    </>
  )
}
export default App
