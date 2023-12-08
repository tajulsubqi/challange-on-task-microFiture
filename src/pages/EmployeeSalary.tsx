import { useState } from "react"
import Navbar from "../components/Navbar"

interface EmployeeSalaryProps {
  // define props if any
}

const EmployeeSalary: React.FC<EmployeeSalaryProps> = () => {
  const [employeName, setEmployeName] = useState<string>("")
  const [salary, setSalary] = useState<number | string>("")
  const [allowance, setAllowance] = useState<number | string>("")
  const [tax, setTax] = useState<number | string>("")
  const [totalSalary, setTotalSalary] = useState<number | string>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mengonversi nilai input menjadi angka
    const salaryValue = parseFloat(salary as string)
    const allowanceValue = parseFloat(allowance as string)
    const taxValue = parseFloat(tax as string)

    const calculatedTotalSalary = salaryValue + allowanceValue - taxValue
    setTotalSalary(calculatedTotalSalary)
    console.log(`Hasil Perhitungan Gaji ${employeName}, ${tax}, ${totalSalary} `)
  }

  return (
    <div>
      <Navbar />

      <div className="container px-5">
        <h1 className="text-4xl font-bold text-blus text-center mt-10">
          Perhitungan Gaji Karyawan
        </h1>
        <div className="w-full mt-5 flex flex-wrap">
          <div className="w-full pt-10 lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="mt-3">
                <label htmlFor="employeName" className="font-semibold text-dark">
                  Nama Karyawan
                </label>
                <input
                  type="text"
                  name="employe"
                  value={employeName}
                  onChange={(e) => setEmployeName(e.target.value)}
                  className="w-full block mt-2 text-sm px-5 py-2 border border-slate-300 shadow rounded-lg"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="employeName" className="font-semibold text-dark">
                  Gaji Pokok
                </label>
                <input
                  type="number"
                  name="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="w-full block mt-2 text-sm px-5 py-2 border border-slate-300 shadow rounded-lg"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="employeName" className="font-semibold text-dark">
                  Tunjangan
                </label>
                <input
                  type="number"
                  name="allowance"
                  value={allowance}
                  onChange={(e) => setAllowance(e.target.value)}
                  className="w-full block mt-2 text-sm px-5 py-2 border border-slate-300 shadow rounded-lg"
                />
              </div>

              <div className="mt-3">
                <label htmlFor="employeName" className="font-semibold text-dark">
                  Pajak
                </label>
                <input
                  type="number"
                  name="tax"
                  value={tax}
                  onChange={(e) => setTax(e.target.value)}
                  className="w-full block mt-2 text-sm px-5 py-2 border border-slate-300 shadow rounded-lg"
                />
              </div>

              <button className="bg-blus hover:bg-teal-700 text-white text-sm mt-5 font-bold py-2 px-4 rounded-lg">
                Submit
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 pt-10 pl-10">
            <h1 className="text-base font-medium">Result :</h1>
            <table className="mt-3 w-full border-collapse border border-gray-300">
              <thead>
                <tr className="text-sm bg-sky-300">
                  <th className="border border-gray-500 px-4 py-2 ">Nama</th>
                  <th className="border border-gray-500 px-4 py-2">Gaji Pokok</th>
                  <th className="border border-gray-500 px-4 py-2">Tunjangan</th>
                  <th className="border border-gray-500 px-4 py-2">Bayar Pajak</th>
                  <th className="border border-gray-500 px-4 py-2">Total Gaji</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center bg-slate-50">
                  <td className="border border-gray-500 px-4 py-2 uppercase text-[12px]">
                    {employeName}
                  </td>
                  <td className="border border-gray-500 px-4 py-2">{salary}</td>
                  <td className="border border-gray-500 px-4 py-2">{allowance}</td>
                  <td className="border border-gray-500 px-4 py-2">{tax}</td>
                  <td className="border border-gray-500 px-4 py-2">{totalSalary}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeSalary
