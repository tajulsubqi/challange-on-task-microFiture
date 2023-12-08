import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EmployeeSalary from "./pages/EmployeeSalary"
import MobileLegendHeroes from "./pages/MobileLegendHeroes"
import HomePage from "./pages/HomePage"
import CurrencyConverter from "./pages/CurrencyConverter"
import CountdownDate from "./pages/CountdownDate"
import WordGame from "./pages/WordGame"
import TicTacToe from "./pages/TicTacToe"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employee_salary" element={<EmployeeSalary />} />
          <Route path="/wordgame" element={<WordGame />} />
          <Route path="/countdate" element={<CountdownDate />} />
          <Route path="/mobile_legend" element={<MobileLegendHeroes />} />
          <Route path="/currency_converter" element={<CurrencyConverter />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </>
  )
}
