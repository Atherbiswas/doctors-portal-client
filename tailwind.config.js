/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorTheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: '#3A4256',
          "base-100": '#FAFAFA',
        }
      }
    ]

  },
  theme: {
    extend: {
      backgroundImage: {
        bannerImage: "url('/src/assets/images/bg.png')",
        doctorImage: "url('/src/assets/images/appointment.png')"
      }
    },
  },
  plugins: [require("daisyui")],
}
