import React, { useState, useEffect, ChangeEvent, FormEvent } from "react"
import Navbar from "../components/Navbar"

const WordGame: React.FC = () => {
  const [wordList, setWordList] = useState<string[]>([])
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0)
  const [userInput, setUserInput] = useState<string>("")
  const [score, setScore] = useState<number>(0)
  const [error, setError] = useState<string>("")
  const [showAlert, setShowAlert] = useState<boolean>(false)

  // Daftar kata-kata dummy (nama hewan)
  const dummyWords: string[] = [
    "dandiSaputra",
    "krisLouli",
    "putuWiranto",
    "sultan",
    "aniq rizqi",
    "rahmat kurniawan",
    "rizqul",
    "arif luthfi",
  ]

  // Mengacak setiap huruf dalam sebuah kata
  const shuffle = (word: string): string => {
    const shuffledArray = word.split("").sort(() => Math.random() - 0.5)
    return shuffledArray.join("")
  }

  // Mengacak huruf dalam setiap kata
  const shuffleWords = (words: string[]): string[] => {
    return words.map((word) => shuffle(word))
  }

  // Mendapatkan daftar kata dari API (contoh menggunakan random-word-api)
  useEffect(() => {
    const shuffledWords = shuffleWords(dummyWords)
    setWordList(shuffledWords)
  }, [])

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value)
  }

  // Fungsi untuk menangani pengiriman jawaban
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const currentWord = dummyWords[currentWordIndex]
    if (userInput.toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1)
      setCurrentWordIndex(currentWordIndex + 1)
      setUserInput("")
      setShowAlert(true)
      setError("")
    } else {
      setError("Jawaban salah ❌, coba lagi!")
      setShowAlert(false)
    }
  }

  const handleAlertClose = (): void => {
    setShowAlert(false)
    setError("")
  }

  return (
    <>
      <Navbar />
      <div className="w-full fixed">
        {error && (
          <div className="bg-red-200 text-red-800 p-2 mb-4 rounded-md">
            {error}
            <button onClick={handleAlertClose} className="text-red-600 ml-4">
              x
            </button>
          </div>
        )}
        {showAlert && (
          <div className="bg-green-200 text-green-800 p-2 mb-4 rounded-md">
            Selamat! Jawaban benar.✅
            <button onClick={handleAlertClose} className="text-green-600 ml-4">
              x
            </button>
          </div>
        )}
      </div>
      <div className="container mt-10">
        <h1 className="text-4xl font-bold text-center text-blus">Word Scramble</h1>
        <h1 className="text-lg font-bold text-center mt-10 text-blus">anggota dumbways b-50</h1>
        <div className="w-[400px] mx-auto mt-4 border border-gray-300 bg-slate-50 rounded-md">
          <div className="bg-slate-300 text-center py-1">
            <p className="font-medium">
              Score: <span className="text-red-500 font-bold">{score}</span>
            </p>
            <p className="font-medium">Guess the word:</p>
          </div>
          <p className="text-center text-xl mt-5 font-bold">
            {currentWordIndex < dummyWords.length
              ? wordList[currentWordIndex]
              : "Game Over"}
          </p>
          <form onSubmit={handleSubmit} className="p-4">
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder="Enter your guess"
              className="p-2 border m-2 border-gray-400 rounded-md"
            />
            <button
              type="submit"
              className="text-md font-semibold px-4 py-2 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300"
            >
              enter
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default WordGame
