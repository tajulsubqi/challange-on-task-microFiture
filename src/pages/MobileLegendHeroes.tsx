import { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "../components/Navbar"

interface Hero {
  hero_name: string
  hero_role: string
  hero_specially: string
}

const MobileLegendHeroes: React.FC = () => {
  const [data, setData] = useState<Hero[]>([])
  const [search, setSearch] = useState<string>("")

  const fetchData = async () => {
    try {
      const response = await axios.get("https://api.dazelpro.com/mobile-legends/hero")
      console.log(response.data.hero)
      setData(response.data.hero)
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const filteredData = data.filter((item) =>
    item.hero_name.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <>
      <Navbar />
      <div className="container my-10 px-5">
        <h1 className="text-center text-4xl font-bold text-blus mb-10">
          Daftar Hero Mobile Legend
        </h1>
        <div className="mb-4">
          <label className="text-base text-slate-600 font-medium">
            Cari Hero:
            <input
              className="border border-slate-300 rounded-md text-sm px-3 py-1 ml-2"
              type="text"
              placeholder="Masukkan nama hero..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="w-full border border-slate-300 p-6 rounded-lg  bg-white shadow-md"
            >
              <h2 className="text-lg font-medium text-dark uppercase">
                {item.hero_name}
              </h2>
              <h3 className="text-sm font-semibold text-slate-600 mt-2">
                Peran:{" "}
                <span className="text-slate-800 italic ml-1">{item.hero_role}</span>
              </h3>
              <h3 className="text-sm font-semibold text-slate-600 mt-1">
                Kemampuan Khusus:
                <span className=" text-slate-800 italic ml-2 ">
                  {item.hero_specially}:
                </span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MobileLegendHeroes
