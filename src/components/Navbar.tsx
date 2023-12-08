import { Link } from "react-router-dom"
import { useState } from "react"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="w-full flex flex-col md:flex-row justify-between bg-sky-600 py-3 shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-20">
          <Link to="/">
            <h1 className="text-white font-bold uppercase hover:scale-110 hover:text-slate-200 transition duration-300">
              Home
            </h1>
          </Link>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
        <div
          className={`md:flex ${
            menuOpen ? "flex" : "hidden"
          } flex-col md:flex-row gap-8 px-4 md:px-20 font-medium text-white text-center md:text-left`}
        >
          <Link to="/employee_salary" className="nav-link">
            Employee Salary
          </Link>
          <Link to="/countdate" className="nav-link">
            Count Date
          </Link>
          <Link to="/mobile_legend" className="nav-link">
            Hero Mobile Legend
          </Link>
          <Link to="/currency_converter" className="nav-link">
            Currency Converter
          </Link>
          <Link to="/wordgame" className="nav-link">
            Word Scramble
          </Link>
          <Link to="/tictactoe" className="nav-link">
            Tic Tac Toe
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
