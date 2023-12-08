import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownDate: React.FC = () => {
  const [targetDate, setTargetDate] = useState<string>("")
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(),
  )
  const [countdownActive, setCountdownActive] = useState<boolean>(false)

  function calculateTimeRemaining() {
    const currentTime = new Date()
    const targetTime = new Date(targetDate)

    const timeDifference = targetTime.getTime() - currentTime.getTime()
    if (timeDifference > 0) {
      const seconds = Math.floor((timeDifference / 1000) % 60)
      const minutes = Math.floor((timeDifference / 1000 / 60) % 60)
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24)
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

      return { days, hours, minutes, seconds }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
  }

  useEffect(() => {
    let intervalId

    if (countdownActive) {
      intervalId = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining())
      }, 1000)
    }

    return () => {
      clearInterval(intervalId)
    }
  }, [countdownActive, targetDate])

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetDate(e.target.value)
  }

  const startCountdown = () => {
    setCountdownActive(true)
  }

  const stopCountdown = () => {
    setCountdownActive(false)
  }

  return (
    <>
      <Navbar />
      <div className="container px-5  ">
        <h1 className="text-center text-blus font-bold text-4xl mt-10">
          Countdown Timer
        </h1>
        <div className="mx-auto flex justify-center">
          <div>
            <div className="mt-10 ">
              <label className="text-base text-slate-600">
                Set Target Date:
                <input
                  className="block border border-slate-300 rounded-md px-5 py-1 w-72"
                  type="datetime-local"
                  value={targetDate}
                  onChange={handleDateChange}
                />
              </label>
            </div>

            <p className="mt-5">
              Time Remaining:{" "}
              <span className="block w-72 bg-blus text-white px-3 py-2  mt-2 rounded-xl">
                {timeRemaining.days} days, {timeRemaining.hours} hours,{" "}
                {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds
              </span>
            </p>
          </div>
        </div>

        <div className="mt-5 text-center">
          <button
            className="bg-blus text-white w-10 h-10 font-bold text-sm rounded-full mr-3 hover:bg-teal-600 hover:scale-110  transition-all hover:duration-300"
            onClick={startCountdown}
          >
            Start
          </button>
          <button
            className="bg-red-500 text-white w-10 h-10 font-bold text-sm rounded-full hover:bg-red-700  hover:scale-110  transition-all hover:duration-300"
            onClick={stopCountdown}
          >
            Stop
          </button>
        </div>
      </div>
    </>
  )
}

export default CountdownDate
