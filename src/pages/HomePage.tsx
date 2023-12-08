import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-4xl text-blus font-bold text-center mt-10">Challange Task</h1>
        <div className="w-full mt-10">
          <div className="w-[600px] mx-auto flex flex-wrap justify-center gap-9 bg-white border-slate-200 border py-9 rounded-lg shadow-md">
            <Link to="/countdate">
              <span className="text-md font-semibold  px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300 ">
                Count Duration
              </span>
            </Link>
            <Link to="/employee_salary">
              <span className="text-md font-semibold px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300">
                Employee Salary
              </span>
            </Link>
            <Link to="/mobile_legend">
              <span className="text-md font-semibold px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300">
                Mobile Legend
              </span>
            </Link>
            <Link to="/currency_converter">
              <span className="text-md font-semibold px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300">
                Currency Converter
              </span>
            </Link>
            <Link to="/wordgame">
              <span className="text-md font-semibold px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300">
                Word Scramble
              </span>
            </Link>
            <Link to="/tictactoe">
              <span className="text-md font-semibold px-10 py-3 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300">
                Tic Tac Toe
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
