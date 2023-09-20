/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      red: {
        5: "#FFF2F0",
        10: "#FFE1DD",
        20: "#FFC7C0",
        30: "#FFABA4",
        40: "#FF8C85",
        50: "#FF6E6B",
        60: "#FB4B51",
        70: "#D62336",
        80: "#B0001D",
        90: "#8C0002",
        100: "#690000",
      },
      orange: {
        5: "#FFF4EE",
        10: "#FFE6D9",
        20: "#FFCFB7",
        30: "#FFB897",
        40: "#FF9F73",
        50: "#FF8753",
        60: "#FA6F32",
        70: "#D14D0F",
        80: "#A92A00",
        90: "#830000",
        100: "#600000",
      },
    },
  },
  plugins: [],
};
