/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
    // screens:{
    //   xl:{max:"1279px"},
    //   lg:{max:"1023px"},
    //   md:{max:"767"},
    //   sm:{max:"639px"}
    // },
    container:{
      padding:"50px",
      center:true
    }
  },
  variants:{},
  plugins: [],
}
