/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: "true",
    },
    extend: {
      colors: {
        secondary: "#64748b",
        dark: "#1e293b",
        primary: "#14b8a6",
        blus: "#0369a1",
      },
    },
  },
  plugins: [],
}
