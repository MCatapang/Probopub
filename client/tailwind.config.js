/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
        colors: {
            "custom-bg-body": "#6f6866",
            "custom-bg-non-body": "#38302e",
            "custom-bg-panel": "#ccdad1",
            "custom-bg-panel-header": "#788585",

            "custom-text-dark-bg": "#ffffff",
            "custom-text-light-bg": "#ccdad1",

            "custom-hover-shadow": "#9caea9"
        }
    },
    fontFamily: {
        Poppins: ["Poppins, sans-serif"]
    }
  },
  plugins: [],
}
