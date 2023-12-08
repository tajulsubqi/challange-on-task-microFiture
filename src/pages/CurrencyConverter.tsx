import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

interface CurrencyConverterProps {
  // Define props if any
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = () => {
  const [amount, setAmount] = useState<string>("")
  const [sourceCurrency, setSourceCurrency] = useState<string>("USD")
  const [targetCurrency, setTargetCurrency] = useState<string>("IDR")
  const [result, setResult] = useState<string>("")
  const [exchangeRate, setExchangeRate] = useState<number | null>(null)

  useEffect(() => {
    // Fungsi untuk mendapatkan nilai tukar mata uang dari ExchangeRate-API
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://open.er-api.com/v6/latest/${sourceCurrency}`,
        )
        setExchangeRate(response.data.rates[targetCurrency])
      } catch (error) {
        console.error("Error fetching exchange rate:", error)
      }
    }

    fetchExchangeRate()
  }, [sourceCurrency, targetCurrency])

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleSourceCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSourceCurrency(e.target.value)
  }

  const handleTargetCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetCurrency(e.target.value)
  }

  const convertCurrency = () => {
    if (!exchangeRate) {
      console.error("Exchange rate not available.")
      return
    }

    const convertedResult = parseFloat(amount) * exchangeRate
    setResult(convertedResult.toFixed(2)) // Format to two decimal places
  }

  return (
    <>
      <Navbar />
      <div className="container mt-10">
        <h1 className="text-4xl font-bold text-center text-blus">Currency Converter</h1>
        <div className="w-[950px] mx-auto p-5 mt-5 border shadow-sm bg-slate-100 rounded-md">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={handleAmountChange}
            className="p-2 border m-2 border-slate-400 rounded-md w-[600px]"
          />
          <select
            value={sourceCurrency}
            onChange={handleSourceCurrencyChange}
            className="p-2 m-2 border border-slate-300 rounded-md"
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>

          <span>TO</span>

          <select
            value={targetCurrency}
            onChange={handleTargetCurrencyChange}
            className="p-2 m-2 border border-slate-300 rounded-md"
          >
            <option value="USD">USD</option>
            <option value="IDR">IDR</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
          <button
            onClick={convertCurrency}
            className="text-md font-semibold px-4 py-2 bg-blus text-white rounded-xl hover:bg-teal-700 duration-300"
          >
            Convert
          </button>
          <label className="block ml-2 mt-2">Result: {result}</label>
          <input
            type="text"
            value={result}
            readOnly
            className="p-2 border m-2 border-slate-300 rounded-md"
          />
        </div>
      </div>
    </>
  )
}

export default CurrencyConverter
